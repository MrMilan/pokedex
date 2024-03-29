import { FetchResult } from "@apollo/client";
import type { ResponseResult, ServerError } from "./types";

export const handleResult = <T, U>(
  result: FetchResult<T>,
  getDataResult: (resultData: NonNullable<T>) => U
): ResponseResult<U> => {
  if (result.data) {
    return { dataResult: getDataResult(result.data) };
  } else {
    return {
      serverError: {
        internal: !!result.errors,
        code: result.errors?.[0].extensions?.code,
        status: result.errors?.[0].extensions?.status,
        messages: result.errors ? result.errors.map((error) => error.message) : ["Unknown error"],
      },
    };
  }
};

export const handleError = (message: string, error: unknown): ServerError => {
  if (error instanceof Error) {
    return {
      internal: true,
      messages: [`${message}: ${error.message}`],
    };
  }
  return {
    internal: true,
    messages: ["An unknown error occurred."],
  };
};
