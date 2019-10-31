export interface ScrudStateModel<T> {
  list: T[];
  model?: T;
  loading: boolean;
  error?: Error;
  paginateObject: any;
  search?: any;
  filters?: any[];
  orders?: any[];
}

export type StateSelector<T> = (state: ScrudStateModel<any>) => T;
