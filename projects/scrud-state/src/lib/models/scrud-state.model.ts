import { PaginateObject } from './paginate-object.model';
import { ListFilter } from './list-filter.model';
import { ListOrder } from './list-order.model';
import { ArrayHandler } from './array-handler.model';

export interface ScrudStateModel<T> {
  list: T[];
  model?: T;
  loading: boolean;
  error?: Error;
  paginateObject: PaginateObject;
  search?: string;
  filters: ArrayHandler<ListFilter>;
  orders: ArrayHandler<ListOrder>;
}

export type StateSelector<T> = (state: ScrudStateModel<any>) => T;
