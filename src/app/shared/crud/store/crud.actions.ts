// tslint:disable-next-line: no-namespace
export namespace CrudActions {
  export class GetList {
    constructor(public payload: { size: number }) {}
  }

  export class GetListsSucceeded<T> {
    constructor(public payload: { list: T[] }) {}
  }

  export class GetModel {
    constructor(public payload: { id: number | string }) {}
  }

  export class GetModelSucceeded<T> {
    constructor(public payload: { model: T }) {}
  }

  export class GetListsFailed {}
  export class GetModelFailed {}
}
