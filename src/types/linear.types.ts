export interface LinearWebhookData {
  identifier: string;
  assignee?: { name?: string };
  title: string;
  estimate?: number;
  description?: string;
  url: string;
  dueDate?: string;
  state: { type: string };
  // Add other relevant fields from the Linear webhook payload
}
