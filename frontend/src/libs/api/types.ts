export interface ServerError {
  internal: boolean;
  status?: number;
  code?: string;
  messages: string[];
}

export interface ResponseResult<T> {
  dataResult?: T;
  serverError?: ServerError;
}
