import { Hono } from "hono";
import FlowSavvy from "../classes/FlowSavvy";
import crypto from "crypto";
import FormData from "form-data";
import dotenv from "dotenv";
import assert from "node:assert";
import Task from "../classes/Task";
import { Context } from "hono";

dotenv.config();
assert(
  process.env.SIGNING_SECRET,
  "[env variables] SIGNING_SECRET is required"
);
assert(process.env.FULL_NAME, "[env variables] FULL_NAME is required");
assert(
  process.env.ESTIMATION_POINT_IN_MINUTES,
  "[env variables] ESTIMATION_POINT_IN_MINUTES is required"
);

const Client = new FlowSavvy();
const app = new Hono(); // Changed from const router = Router();

app.get("/", async (c: Context) => {
  // Changed req: Request, res: Response to c: Context
  return c.json({
    // Changed res.json to c.json
    status: "success",
    message: "Use this URL as Linear webhook to sync with FlowSavvy.",
    author: "@ChrisvanChip",
  });
});

// Actual webhook endpoint – this is where the magic happens ✨
app.post("/", async (c: Context) => {
  // Changed req: Request, res: Response to c: Context and made async
  let body = await c.req.json(); // Changed req.body to await c.req.json()
  if (!body || !body.data || !body.data.identifier) {
    return c.json(
      {
        // Changed res.json to c.json
        status: "error",
        message: "No data provided.",
      },
      400
    ); // Added status code
  }
  body = body.data;

  let tokens = process.env.SIGNING_SECRET!.split(";");
  let valid = false;
  if (process.env.SIGNING_SECRET == "DEV") {
    valid = true;
  }
  let prefix = null;
  tokens.forEach(function (token) {
    const match = token.match(/^C(\d+)_(.*)$/);
    const secret = match ? match[2] : token;
    // Access rawBody from the context prepared in src/index.ts
    const rawRequestBody = (c.req.raw as any).rawBody;
    if (!rawRequestBody) {
      console.error(
        "rawBody is not available on the request. Ensure middleware is correctly setup."
      );
      // Potentially throw or return an error response
    }
    const signature = crypto
      .createHmac("sha256", secret)
      .update(rawRequestBody || "")
      .digest("hex");
    if (signature == c.req.header("linear-signature")) {
      // Changed req.headers['linear-signature'] to c.req.header('linear-signature')
      valid = true;
      if (match) {
        prefix = match[1];
      }
    }
  });
  if (!valid) {
    // In Hono, you typically throw an HTTPError or return a response
    // throw new HTTPException(401, { message: "Invalid signature. SIGNING_SECRET failed." });
    return c.text("Invalid signature. SIGNING_SECRET failed.", 401);
  }

  const assignedToMe = body.assignee?.name === process.env.FULL_NAME;
  console.log(`[debug] -> C${prefix}_TIMEPROFILEID`);
  const timeProfileId = process.env[`C${prefix}_TIMEPROFILEID`];

  try {
    const task = await Client.searchTask(body.identifier);
    if (task) {
      if (assignedToMe) {
        console.log(
          `[log] Update task ${task.id} from Linear issue ${body.identifier}`
        );

        let duration = Number(process.env.ESTIMATION_POINT_IN_MINUTES!);
        duration *= body.estimate || 1;
        task.DurationHours = Math.floor(duration / 60);
        task.DurationMinutes = duration % 60;
        task.Title = `${body.title} (${body.identifier})`;
        task.Notes = body.Description || "" + "\n\n" + body.url;
        task.DueDateTime = body.dueDate ? body.dueDate + "T23:59:59" : null;
        task.EndDateTime = `2000-01-01T${task.DurationHours.toString().padStart(
          2,
          "0"
        )}:${task.DurationMinutes.toString().padStart(2, "0")}:00`;

        if (timeProfileId) {
          task.TimeProfileID = Number(timeProfileId);
        }

        // Hono/Fetch API uses native FormData. The 'form-data' library might not be needed
        // or its usage might need to be adapted.
        let formData = new FormData(); // Using 'form-data' library instance
        for (let [key, value] of Object.entries(task)) {
          if (value) formData.append(key, String(value)); // Ensure value is string for FormData
        }
        // The way headers are passed might change, especially if using native fetch
        // formData.getHeaders() is specific to the 'form-data' library
        await Client.request(
          "POST",
          "Item/Edit",
          formData,
          true,
          formData.getHeaders()
        ); // Restored formData.getHeaders()
        await Client.forceRecalculate();
        if (body.state.type === "completed" || body.state.type === "canceled") {
          console.log(`[log] Mark task as completed in FlowSavvy: ${task.id}`);

          let completeFormData = new FormData(); // Using 'form-data' library instance
          completeFormData.append(
            "serializedItemIdToInstanceIdsDict",
            `{"${task.id}":[0]}`
          );
          await Client.request(
            "POST",
            "Item/ChangeTaskCompleteStatus",
            completeFormData,
            true,
            completeFormData.getHeaders() // Restored formData.getHeaders()
          );
        }
      } else {
        console.log(
          `[log] Task assigned to someone else, so delete: ${task.id}`
        );

        let deleteFormData = new FormData(); // Using 'form-data' library instance
        deleteFormData.append(
          "serializedItemIdToInstanceIdsDict",
          `{"${task.id}":[0]}`
        );
        deleteFormData.append("deleteType", "deleteAll");
        await Client.request(
          "POST",
          "Item/MultipleDelete",
          deleteFormData,
          true,
          deleteFormData.getHeaders() // Restored formData.getHeaders()
        );
        await Client.forceRecalculate();
      }
    } else {
      if (assignedToMe && body.state.type !== "completed") {
        console.log(
          `[log] Create task in FlowSavvy from Linear issue ${body.identifier}`
        );

        let duration = Number(process.env.ESTIMATION_POINT_IN_MINUTES!);
        duration *= body.estimate || 1;

        let newTask = new Task(
          0,
          duration,
          `${body.title} (${body.identifier})`,
          body.description || "" + "\n\n" + body.url,
          body.dueDate
        );
        if (timeProfileId) {
          newTask.TimeProfileID = Number(timeProfileId);
        }
        let createFormData = new FormData(); // Using 'form-data' library instance
        for (let [key, value] of Object.entries(newTask)) {
          if (value) createFormData.append(key, String(value)); // Ensure value is string
        }
        await Client.request(
          "POST",
          "Item/Create",
          createFormData,
          true,
          createFormData.getHeaders()
        ); // Restored formData.getHeaders()
        await Client.forceRecalculate();
      }
    }
    return c.body(null, 200); // Changed res.sendStatus(200)
  } catch (err) {
    console.error(err);
    // return c.text('Internal Server Error', 500); // Changed res.sendStatus(500)
    // It's better to throw an HTTPException or return a JSON response for errors
    // throw new HTTPException(500, { message: 'Internal Server Error', cause: err });
    return c.json({ status: "error", message: "Internal Server Error" }, 500);
  }
});

export default app; // Changed export default router to export default app
