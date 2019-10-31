export class CrudStateError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class NoSuchModelError extends CrudStateError {
  constructor(id: string) {
    super(`No model for ID ${id}`);
  }
}

export class GetListError extends CrudStateError {
  constructor(err?: string) {
    super(`Load list failed.\n\tCause: ${err}`);
  }
}

export class GetModelError extends CrudStateError {
  constructor(err?: string) {
    super(`Load list failed.\n\tCause: ${err}`);
  }
}

export class UpdateModelFailedError extends CrudStateError {
  constructor(cause?: Error) {
    super(`Updating model failed.\n\tCause: ${cause}`);
  }
}

export class CreateModelFailedError extends CrudStateError {
  constructor(cause?: Error) {
    super(`Creating model failed.\n\tCause: ${cause}`);
  }
}

export class InvalidIdError extends CrudStateError {
  constructor(id: string | number | undefined) {
    super(`Invalid ID: ${id}`);
  }
}
