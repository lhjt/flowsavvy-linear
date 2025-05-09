import FormData from "form-data";
import Task from "./Task";
import { FlowSavvyApiClient } from "./FlowSavvyApiClient";

class FlowSavvy {
  public apiClient: FlowSavvyApiClient;

  constructor() {
    this.apiClient = new FlowSavvyApiClient();
  }

  public async initialize(): Promise<void> {
    await this.apiClient.initialize();
  }

  async searchTask(query: string): Promise<Task | undefined> {
    const endpoint = `item/search?query=${encodeURIComponent(
      query
    )}&searchCompletedTasks=false&getItemsAfterCursor=true&takeFirst=true&batchSize=50`;

    try {
      const response = await this.apiClient.request(
        "GET",
        endpoint,
        undefined,
        false
      );

      const tasksData = response.data?.searchResponse?.items;
      if (!tasksData || tasksData.length === 0) {
        return undefined;
      }

      const taskData = tasksData[0];
      if (!taskData || typeof taskData.id === "undefined") {
        console.warn(
          "Search task returned incomplete data for the first item.",
          taskData
        );
        return undefined;
      }

      const duration =
        (taskData.DurationHours || 0) * 60 + (taskData.DurationMinutes || 0);
      return new Task(
        taskData.id,
        duration,
        taskData.Title,
        taskData.Notes,
        taskData.DueDateTime
      );
    } catch (error) {
      console.error(`Error searching task with query "${query}":`, error);
      return undefined;
    }
  }

  async createTask(taskData: FormData): Promise<void> {
    try {
      await this.apiClient.request(
        "POST",
        "Item/Create",
        taskData,
        true, // requiresCsrfToken
        taskData.getHeaders()
      );
      console.log("Task created successfully via FlowSavvy class.");
    } catch (error) {
      console.error("Error creating task via FlowSavvy class:", error);
      throw error;
    }
  }

  async editTask(taskData: FormData): Promise<void> {
    try {
      await this.apiClient.request(
        "POST",
        "Item/Edit",
        taskData,
        true, // requiresCsrfToken
        taskData.getHeaders()
      );
      console.log("Task edited successfully via FlowSavvy class.");
    } catch (error) {
      console.error("Error editing task via FlowSavvy class:", error);
      throw error;
    }
  }

  async changeTaskCompleteStatus(completeData: FormData): Promise<void> {
    try {
      await this.apiClient.request(
        "POST",
        "Item/ChangeTaskCompleteStatus",
        completeData,
        true, // requiresCsrfToken
        completeData.getHeaders()
      );
      console.log("Task status changed successfully via FlowSavvy class.");
    } catch (error) {
      console.error("Error changing task status via FlowSavvy class:", error);
      throw error;
    }
  }

  async deleteTask(deleteData: FormData): Promise<void> {
    try {
      await this.apiClient.request(
        "POST",
        "Item/MultipleDelete",
        deleteData,
        true, // requiresCsrfToken
        deleteData.getHeaders()
      );
      console.log("Task deleted successfully via FlowSavvy class.");
    } catch (error) {
      console.error("Error deleting task via FlowSavvy class:", error);
      throw error;
    }
  }

  async forceRecalculate(): Promise<void> {
    const formData = new FormData();
    formData.append("force", "true");

    try {
      await this.apiClient.request(
        "POST",
        "Schedule/Recalculate",
        formData,
        true, // requiresCsrfToken
        formData.getHeaders() // Additional headers from FormData
      );
      console.log("Force recalculate command sent successfully.");
    } catch (error) {
      console.error("Error forcing recalculation:", error);
      throw error;
    }
  }
}

export default FlowSavvy;
