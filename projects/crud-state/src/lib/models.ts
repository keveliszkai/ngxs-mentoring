/**
 * Interface for an EntityState.
 * Includes the entities in an object literal, the loading and error state and the ID of the active selected entity.
 */
export interface CrudStateModel<T> {
  list: T[];
  model?: T;
  loading: boolean;
  error?: Error;
  paginateObject: any;
  search?: any;
  filters?: any[];
  orders?: any[];
}

export type StateSelector<T> = (state: CrudStateModel<any>) => T;

export type DeepReadonly<T> = T extends (infer R)[]
  ? DeepReadonlyArray<R>
  : T extends Function
  ? T
  : T extends object
  ? DeepReadonlyObject<T>
  : T;

// This should be ReadonlyArray but it has implications.
export interface DeepReadonlyArray<T> extends Array<DeepReadonly<T>> {}

export type DeepReadonlyObject<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> };

/**
 * Function that provides an ID for the given entity
 */
export type IdProvider<T> = (entity: Partial<T>, state: CrudStateModel<T>) => string;
