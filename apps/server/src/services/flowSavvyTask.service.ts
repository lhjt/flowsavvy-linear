import FlowSavvy from "../lib/flowsavvy/FlowSavvy";
import Task from "../classes/Task";
import FormData from "form-data";
import { LinearWebhookData } from "../types/linear.types";

export class FlowSavvyTaskService {
  private flowSavvyClient: FlowSavvy;
  private estimationPointInMinutes: number;

  constructor(flowSavvyClient: FlowSavvy, estimationPointInMinutes: number) {
    this.flowSavvyClient = flowSavvyClient;
    this.estimationPointInMinutes = estimationPointInMinutes;
  }

  public async updateExistingTask(
    webhookData: LinearWebhookData,
    existingTask: Task,
    timeProfileId: number | undefined
  ) {
    console.log(
      `[FlowSavvyTaskService] Updating task ${existingTask.id} from Linear issue ${webhookData.identifier}`
    );

    let duration = this.estimationPointInMinutes * (webhookData.estimate || 1);
    existingTask.DurationHours = Math.floor(duration / 60);
    existingTask.DurationMinutes = duration % 60;
    existingTask.Title = `${webhookData.title} (${webhookData.identifier})`;
    existingTask.Notes =
      (webhookData.description || "") + "\n\n" + webhookData.url;
    existingTask.DueDateTime = webhookData.dueDate
      ? webhookData.dueDate + "T23:59:59"
      : null;
    existingTask.EndDateTime = `2000-01-01T${existingTask.DurationHours.toString().padStart(
      2,
      "0"
    )}:${existingTask.DurationMinutes.toString().padStart(2, "0")}:00`;

    if (timeProfileId) {
      existingTask.TimeProfileID = timeProfileId;
    }

    let formData = new FormData();
    for (let [key, value] of Object.entries(existingTask)) {
      if (value !== undefined && value !== null)
        formData.append(key, String(value));
    }
    await this.flowSavvyClient.editTask(formData);
    await this.flowSavvyClient.forceRecalculate();

    if (
      webhookData.state.type === "completed" ||
      webhookData.state.type === "canceled"
    ) {
      console.log(
        `[FlowSavvyTaskService] Marking task as completed in FlowSavvy: ${existingTask.id}`
      );
      let completeFormData = new FormData();
      completeFormData.append(
        "serializedItemIdToInstanceIdsDict",
        `{"${existingTask.id}":[0]}`
      );
      await this.flowSavvyClient.changeTaskCompleteStatus(completeFormData);
    }
  }

  public async deleteExistingTask(existingTask: any) {
    console.log(
      `[FlowSavvyTaskService] Task ${existingTask.id} no longer assigned to me, deleting from FlowSavvy.`
    );
    let deleteFormData = new FormData();
    deleteFormData.append(
      "serializedItemIdToInstanceIdsDict",
      `{"${existingTask.id}":[0]}`
    );
    deleteFormData.append("deleteType", "deleteAll");
    await this.flowSavvyClient.deleteTask(deleteFormData);
    await this.flowSavvyClient.forceRecalculate();
  }

  public async createNewTask(
    webhookData: LinearWebhookData,
    timeProfileId: number | undefined
  ) {
    console.log(
      `[FlowSavvyTaskService] Creating new task in FlowSavvy from Linear issue ${webhookData.identifier}`
    );
    let duration = this.estimationPointInMinutes * (webhookData.estimate || 1);

    const newTask = new Task(
      0,
      duration,
      `${webhookData.title} (${webhookData.identifier})`,
      (webhookData.description || "") + "\n\n" + webhookData.url,
      webhookData.dueDate
    );

    if (timeProfileId) {
      newTask.TimeProfileID = timeProfileId;
    }

    let createFormData = new FormData();
    for (let [key, value] of Object.entries(newTask)) {
      if (value !== undefined && value !== null)
        createFormData.append(key, String(value));
    }
    await this.flowSavvyClient.createTask(createFormData);
    await this.flowSavvyClient.forceRecalculate();
  }
}
