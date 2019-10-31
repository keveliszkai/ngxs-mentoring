import { ScrudStateModel } from '../models';
import { ListOrder } from '../models/list-order.model';
import { ListFilter } from '../models/list-filter.model';
import { ArrayHandler } from '../models/array-handler.model';

/**
 * Returns a new object which serves as the default state.
 * No entities, loading is false, error is undefined, active is undefined.
 * pageSize is 10 and pageIndex is 0.
 */
export function defaultEntityState<T>(
  defaults: Partial<ScrudStateModel<T>> = {},
): ScrudStateModel<T> {
  return {
    list: [],
    loading: false,
    paginateObject: {
      currentPage: 1,
      itemsPerPage: 10,
    },
    orders: new ArrayHandler<ListOrder>([]),
    filters: new ArrayHandler<ListFilter>([]),
  };
}
