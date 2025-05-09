import { MiddlewareHandler, Context, Next } from "hono";
import crypto from "crypto";

/**
 * Middleware to verify the signature of incoming Linear webhooks.
 * It checks the 'linear-signature' header against a signature generated
 * using the SIGNING_SECRET environment variable.
 *
 * If the SIGNING_SECRET is "DEV", verification is skipped for development purposes.
 * Supports multiple secrets separated by semicolons, potentially prefixed with C<id>_.
 * If a prefixed secret matches, the <id> is stored in c.set('linearWebhookClientPrefix', id).
 */
export const verifyLinearSignature: MiddlewareHandler = async (
  c: Context,
  next: Next
) => {
  const linearSignature = c.req.header("linear-signature");
  // The rawBody should be populated by a preceding middleware (e.g., in src/index.ts)
  const rawRequestBody = (c.req.raw as any)?.rawBody as Buffer | undefined;

  if (!linearSignature) {
    return c.text("Linear signature (linear-signature header) missing.", 401);
  }

  if (!rawRequestBody) {
    // This should ideally not happen if the rawBody middleware in index.ts is correctly set up
    console.error(
      "Raw request body not available for signature verification. Ensure rawBody middleware runs before this."
    );
    return c.text(
      "Internal server error: Raw body not available for verification.",
      500
    );
  }

  const secret = process.env.SIGNING_SECRET;
  if (!secret) {
    console.error("SIGNING_SECRET environment variable is not set.");
    return c.text("Internal server error: Missing server configuration.", 500);
  }

  // Allow skipping verification for local development if SIGNING_SECRET is 'DEV'
  if (secret === "DEV") {
    console.warn("DEVELOPMENT MODE: Skipping Linear signature verification.");
    await next();
    return;
  }

  const secrets = secret.split(";");
  let isValid = false;
  let clientPrefix: string | undefined = undefined;

  for (const currentFullSecret of secrets) {
    const match = currentFullSecret.match(/^C(\d+)_(.*)$/);
    const currentSecretPortion = match ? match[2]! : currentFullSecret;

    const generatedSignature = crypto
      .createHmac("sha256", currentSecretPortion)
      .update(rawRequestBody)
      .digest("hex");

    if (generatedSignature === linearSignature) {
      isValid = true;
      if (match) {
        clientPrefix = match[1];
      }
      break;
    }
  }

  if (!isValid) {
    return c.text("Invalid Linear signature.", 401);
  }

  // Optionally pass the client prefix to the next handlers via context
  if (clientPrefix) {
    c.set("linearWebhookClientPrefix", clientPrefix);
  }

  await next();
};
