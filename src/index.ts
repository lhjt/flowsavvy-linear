import { Hono, Next } from "hono";
import { serve } from "@hono/node-server";
import router from "./routes";
import { Context } from "hono";

declare module "http" {
  export interface IncomingMessage {
    rawBody: Buffer;
  }
}

const app = new Hono();
const port = process.env.PORT || 3000;

// Middleware to capture raw body
app.use("*", async (c: Context, next: Next) => {
  if (c.req.header("content-type")?.includes("application/json")) {
    const rawBody = await c.req.arrayBuffer();
    (c.req.raw as any).rawBody = Buffer.from(rawBody);
    // Hono's `c.req.json()` consumes the body, so we need to make it available again
    // by creating a new Request object with the already read body.
    // This is a workaround and might need adjustment based on Hono versions or specific needs.
    c.req.raw = new Request(c.req.raw, { body: rawBody });
  }
  await next();
});

app.route("/", router);

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port: Number(port),
});
