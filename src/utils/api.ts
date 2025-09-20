import { baseUrl } from "../utils/constants";

export async function fetchApi<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${baseUrl}${endpoint}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}
