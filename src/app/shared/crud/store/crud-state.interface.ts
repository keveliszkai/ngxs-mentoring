import { CrudStateModel } from './crud.state-model';

export interface CrudStateInterface<T> {
  list(state: CrudStateModel<T>): T[];
  model(state: CrudStateModel<T>): T;
}
