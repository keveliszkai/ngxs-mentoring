export interface CrudStateModel<T> {
  list: T[];
  model?: T;
  isLoading: boolean;
  error?: any;
  paginatObject?: any;
  filters?: any[];
  search?: string;
}
