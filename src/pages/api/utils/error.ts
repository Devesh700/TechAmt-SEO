// utils/errors.ts
export class ApiError extends Error {
  public status: number;

  constructor(status: number, message: string,error:Error) {
    super(message);
    this.status = status;
    this.stack=error.stack;
  }
}

// Usage:
// throw new ApiError(404, 'Career not found',["error"]);
