import { Hono, Next } from "hono";
import { serve } from "@hono/node-server";
import setupRoutes from "./routes";
import { Context } from "hono";
import FlowSavvy from "./lib/flowsavvy/FlowSavvy";

declare module "http" {
  export interface IncomingMessage {
    rawBody: Buffer;
  }
}

const app = new Hono();
const port = process.env.PORT || 3000;
const flowSavvyClient = new FlowSavvy();

// Middleware to capture raw body
app.use("*", async (c: Context, next: Next) => {
  console.log("middleware executing", c);
  // We only need to do this for requests that are likely webhooks
  // and where the body hasn't been read yet.
  // Linear webhooks are typically application/json
  if (
    c.req.header("linear-signature") &&
    c.req.header("content-type")?.includes("application/json")
  ) {
    // Check if rawBody is already populated, possibly by another middleware or an earlier run
    // for a different route on the same request object (less common with '*' but good practice).
    if (!(c.req.raw as any).rawBody) {
      // Clone the request to read its body. This leaves the original request body stream intact
      // for Hono's internal processing or subsequent c.req.json()/text() calls.
      const rawBodyClone = await c.req.raw.clone().arrayBuffer();
      (c.req.raw as any).rawBody = Buffer.from(rawBodyClone);
    }
  }
  await next();
});

// Initialize FlowSavvy client, then setup routes and start server
(async () => {
  try {
    await flowSavvyClient.initialize();
    console.log("FlowSavvy client initialized successfully.");

    const linearRoutes = setupRoutes(flowSavvyClient);
    app.route("/", linearRoutes);

    serve({
      fetch: app.fetch,
      port: Number(port),
    });
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.error(
      "Failed to initialize FlowSavvy client or start server:",
      error
    );
    process.exit(1); // Exit if critical initialization fails
  }
})();
