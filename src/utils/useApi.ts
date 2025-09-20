import { useCallback, useEffect, useState } from "react";
import type { ApiStatus } from "./types/types";
import { fetchApi } from "./api";

export function useApi<T>(endpoint: string) {
  const [status, setStatus] = useState<ApiStatus>("idle");
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | undefined>();

  const fetchData = useCallback(async () => {
    setStatus("loading");
    try {
      const result = await fetchApi<T>(endpoint);
      setData(result);
      setStatus("success");
      return result;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
      setStatus("error");
      throw err;
    }
  }, [endpoint]);

  // Optional: Remove the automatic fetch on mount if you want manual control only
  useEffect(() => {
    // fetchData();
  }, [fetchData]);

  return { status, data, error, refetch: fetchData };
}
