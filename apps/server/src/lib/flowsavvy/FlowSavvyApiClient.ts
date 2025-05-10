import axios, { AxiosResponse, AxiosRequestConfig, request } from "axios";
import FormData from "form-data";
import dotenv from "dotenv";
import assert from "node:assert";
import { AccountApi, Configuration, ScheduleApi } from "flowsavvy-sdk";

dotenv.config();

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
const TIMEZONE = process.env.TIMEZONE;

assert(EMAIL, "[env variables] EMAIL is required");
assert(PASSWORD, "[env variables] PASSWORD is required");
assert(TIMEZONE, "[env variables] TIMEZONE is required");

const BASE_URL = "https://my.flowsavvy.app/api/";

export class FlowSavvyApiClient {
  private cookies: Map<string, string> = new Map();
  private csrfToken: string = "";
  private isInitialized = false;
  private scheduleApi: ScheduleApi;
  private accountApi: AccountApi;

  public getHeaders() {
    return {
      Cookie: this.getCookieHeaderString(),
      "x-csrf-token": this.csrfToken,
      Host: "my.flowsavvy.app",
    };
  }

  constructor() {
    // Credentials are read from process.env
    const config = new Configuration({ basePath: "https://my.flowsavvy.app" });
    this.scheduleApi = new ScheduleApi(config);
    this.accountApi = new AccountApi(config);
  }

  public async initialize(): Promise<void> {
    if (this.isInitialized) {
      console.log("🚀 FlowSavvyApiClient already initialized.");
      return;
    }
    try {
      await this._login();
      this.isInitialized = true;
      console.log(
        "🚀 FlowSavvyApiClient initialized and logged in successfully."
      );
    } catch (error) {
      console.error("🚨 FlowSavvyApiClient initialization failed.", error);
      throw error; // Re-throw to signal failure to the caller
    }
  }

  private updateCookies(setCookieHeader: string[] | undefined): void {
    if (!setCookieHeader) return;
    setCookieHeader.forEach((cookieStr) => {
      const parts = cookieStr.split(";")[0]!.split("="); // Get 'name=value'
      if (parts.length >= 2) {
        const name = parts[0]!;
        const value = parts.slice(1).join("=");
        this.cookies.set(name, value);
      }
    });
  }

  private getCookieHeaderString(): string {
    if (this.cookies.size === 0) return "";
    return Array.from(this.cookies.entries())
      .map(([name, value]) => `${name}=${value}`)
      .join("; ");
  }

  private async _refreshAntiForgeryToken(): Promise<void> {
    const response = await this.scheduleApi.apiScheduleAntiForgeryTokenGet({
      headers: {
        Cookie: this.getCookieHeaderString(),
      },
    });

    if (response.status !== 200) {
      throw new Error(
        `Failed to refresh anti-forgery token. Status: ${response.status}`
      );
    }

    const cookiesFromResponse = response.headers["set-cookie"];
    if (cookiesFromResponse) {
      this.updateCookies(cookiesFromResponse);
    }

    const tokenHtml = response.data; // .value() should give the string directly

    const regex =
      /<input name="__RequestVerificationToken" type="hidden" value="(.*)" \/>/g;
    const match = regex.exec(tokenHtml);
    const requestVerificationToken = match ? match[1]! : "";

    if (!requestVerificationToken) {
      console.warn(
        "Could not extract CSRF token from AntiForgeryToken endpoint."
      );
    }
    this.csrfToken = requestVerificationToken;
  }

  private async _login(): Promise<void> {
    await this._refreshAntiForgeryToken(); // Get initial CSRF token and cookies

    const response = await this.accountApi.apiAccountLoginPost(
      {
        Email: EMAIL!,
        Password: PASSWORD!,
        clientTimeZone: TIMEZONE!,
      },
      { headers: this.getHeaders() }
    );

    if (response.status !== 200) {
      throw new Error(
        `Login failed. Status: ${response.status}. Response: ${JSON.stringify(
          response.data
        )}. Recheck your credentials or API response.`
      );
    }

    const loginCookies = response.headers["set-cookie"];
    this.updateCookies(loginCookies);
  }

  public async request(
    method: string,
    endpoint: string,
    data?: any,
    requiresCsrfToken: boolean = false,
    additionalHeaders?: any,
    isRetry: boolean = false
  ): Promise<AxiosResponse> {
    if (!this.isInitialized && !isRetry) {
      throw new Error("ApiClient not initialized. Call initialize() first.");
    }

    if (requiresCsrfToken) {
      await this._refreshAntiForgeryToken();
    }

    const headers: Record<string, string> = {
      Cookie: this.getCookieHeaderString(),
      ...additionalHeaders, // FormData headers might include Content-Type
    };

    if (this.csrfToken) {
      // Add CSRF token if available and/or required
      headers["x-csrf-token"] = this.csrfToken;
    }

    // Ensure Content-Type is set for JSON if data is an object and not FormData
    if (
      data &&
      !(data instanceof FormData) &&
      typeof data === "object" &&
      !headers["Content-Type"] &&
      !headers["content-type"]
    ) {
      headers["Content-Type"] = "application/json";
    }

    const config: AxiosRequestConfig = {
      method: method as any,
      url: BASE_URL + endpoint,
      data: data,
      headers: headers,
      validateStatus: (status) => status >= 200 && status < 300, // Default Axios behavior for success
    };

    try {
      return await axios(config);
    } catch (error: any) {
      if (
        axios.isAxiosError(error) &&
        error.response?.status === 302 &&
        !isRetry
      ) {
        console.log(
          `Request to ${endpoint} resulted in 302. Attempting re-login and retry.`
        );
        try {
          await this._login(); // Re-authenticate
          return this.request(
            method,
            endpoint,
            data,
            requiresCsrfToken,
            additionalHeaders,
            true
          ); // Retry
        } catch (loginError) {
          console.error("Re-login failed during retry attempt.", loginError);
          throw loginError; // Throw re-login error
        }
      }
      // Log more detailed error information
      let errorMessage = `API Request failed: ${method} ${BASE_URL}${endpoint}.`;
      if (axios.isAxiosError(error)) {
        errorMessage += ` Status: ${error.response?.status}.`;
        if (error.response?.data) {
          errorMessage += ` Data: ${JSON.stringify(error.response.data)}.`;
        }
      } else {
        errorMessage += ` Error: ${error.message}`;
      }
      console.error(errorMessage);
      throw error;
    }
  }
}
