import FlowSavvy from "../classes/FlowSavvy";
// FormData and Task are no longer directly used here, they are used within FlowSavvyTaskService
// import FormData from "form-data";
// import Task from "../classes/Task";
import { LinearWebhookData } from "../types/linear.types";
import {
  getRequiredEnvVars,
  determineTimeProfileId,
} from "./linearWebhook.utils";
import { FlowSavvyTaskService } from "./flowSavvyTask.service";

/**
 * Handles the core logic for processing a validated Linear webhook.
 *
 * @param webhookData The data object from the Linear webhook (body.data).
 * @param clientPrefix Optional client prefix derived from the signing secret, for multi-tenant configurations.
 * @param flowSavvyClient An instance of the FlowSavvy client.
 * @returns A promise that resolves when processing is complete, or rejects with an error.
 */
export const handleLinearWebhook = async (
  webhookData: LinearWebhookData,
  clientPrefix: string | undefined,
  flowSavvyClient: FlowSavvy
) => {
  const { fullName, estimationPointInMinutes } = getRequiredEnvVars();
  const timeProfileId = determineTimeProfileId(clientPrefix, process.env);

  console.log(
    `[WebhookService] Processing for Linear identifier: ${
      webhookData.identifier
    }, Assigned to me: ${
      webhookData.assignee?.name === fullName
    }, ClientPrefix: ${clientPrefix}, TimeProfileID: ${timeProfileId}`
  );

  const flowSavvyTaskService = new FlowSavvyTaskService(
    flowSavvyClient,
    estimationPointInMinutes
  );

  const existingTask = await flowSavvyClient.searchTask(webhookData.identifier);
  const assignedToMe = webhookData.assignee?.name === fullName;

  if (existingTask) {
    if (assignedToMe) {
      await flowSavvyTaskService.updateExistingTask(
        webhookData,
        existingTask,
        timeProfileId
      );
    } else {
      await flowSavvyTaskService.deleteExistingTask(existingTask);
    }
  } else {
    if (
      assignedToMe &&
      webhookData.state.type !== "completed" &&
      webhookData.state.type !== "canceled"
    ) {
      await flowSavvyTaskService.createNewTask(webhookData, timeProfileId);
    }
  }
};
