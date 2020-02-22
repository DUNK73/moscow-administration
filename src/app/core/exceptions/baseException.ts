import { HttpErrorResponse } from '@angular/common/http';

export interface ApiError {
  non_field_errors: Array<string>;
}

export class BaseException extends Error {

  constructor(message: string) {
    super(message);
  }

}

export class BaseHttpException extends BaseException {

  public errors: Array<string>;

  constructor(httpErrorContext: HttpErrorResponse, message: string = null) {
    super(message);

    const error = httpErrorContext.error as ApiError;

    if (error.non_field_errors) {
      this.errors = error.non_field_errors;
    }
  }

}
