import { ListFilterOperator } from './list-filter-operator.enum';

export type ListFilterValue = string | number | boolean | Date;

export interface ListFilter {
  key: string;
  name?: string;
  value: ListFilterValue;
  operator?: ListFilterOperator;
}
