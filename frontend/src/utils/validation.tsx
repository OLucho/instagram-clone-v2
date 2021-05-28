/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

export function getValidationErrors(err: IError): string {
  const validationError = {};
  err.inner.forEach((error) => {
    validationError[error.path] = error.message;
  });
  return validationError;
}
