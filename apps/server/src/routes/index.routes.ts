import { Hono } from "hono";
import FlowSavvy from "../lib/flowsavvy/FlowSavvy";
// FormData and Task are now primarily used within the service
// import FormData from 'form-data';
// import Task from "../classes/Task";
import dotenv from "dotenv";
import assert from "node:assert"; // Keep for CALENDAR_ID in Task.ts or other global asserts if any
import { Context } from "hono";
import { verifyLinearSignature } from "../middleware/linearAuth.middleware";
import { handleLinearWebhook } from "../services/linearWebhook.service"; // Corrected import path
import { LinearWebhookData } from "../types/linear.types"; // Import LinearWebhookData from its new location

dotenv.config();
// Assertions for FULL_NAME and ESTIMATION_POINT_IN_MINUTES are moved to the service
// assert(process.env.FULL_NAME, "[env variables] FULL_NAME is required");
// assert(
//   process.env.ESTIMATION_POINT_IN_MINUTES,
//   "[env variables] ESTIMATION_POINT_IN_MINUTES is required"
// );

export default function setupRoutes(flowSavvyClient: FlowSavvy) {
  const app = new Hono();

  app.get("/", async (c: Context) => {
    return c.json({
      status: "success",
      message: "Use this URL as Linear webhook to sync with FlowSavvy.",
      author: "@ChrisvanChip",
    });
  });

  app.post("/", verifyLinearSignature, async (c: Context) => {
    const rawBody = await c.req.json();
    if (!rawBody || !rawBody.data || !rawBody.data.identifier) {
      return c.json(
        {
          status: "error",
          message: "No data provided or missing identifier.",
        },
        400
      );
    }
    const webhookData = rawBody.data as LinearWebhookData;
    const clientPrefix = c.get("linearWebhookClientPrefix") as
      | string
      | undefined;

    try {
      await handleLinearWebhook(webhookData, clientPrefix, flowSavvyClient);
      return c.body(null, 200); // Send success response
    } catch (error: any) {
      console.error(
        "[RouteHandlerError] Error processing webhook:",
        error.message
      );
      // Determine status code based on error type if possible, otherwise default to 500
      // For now, simple 500 for any service layer error
      return c.json(
        { status: "error", message: error.message || "Internal Server Error" },
        500
      );
    }
  });

  return app;
}
