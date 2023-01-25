class GenericError extends Error {
  public httpStatusCode: number;
  public data?: any;
  public errorMessage: string;

  public constructor(message: string, options?: Record<string, any>) {
    super(message);
    this.httpStatusCode = options?.httpStatusCode || 500;
    this.data = options?.data;
    this.errorMessage = message;
  }

  public get responseData() {
    return {
      message: this.errorMessage,
      code: this.httpStatusCode,
      ...(this.data && { data: this.data }),
    };
  }
}

export = GenericError;
