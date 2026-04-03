import { apiGet } from "./apiClient";
import type { SystemInfo } from "../types/system";

export function getSystemInfo(): Promise<SystemInfo> {
  return apiGet<SystemInfo>("/api/info");
}