import { Observable } from 'rxjs';

export interface ServiceBase<T> {
  factory?: any;

  prefix?: string;

  getAll?(routeParams: { page: number; size: number }): Observable<T[]>;

  getById?(id: number): Observable<T>;

  updateById?(model: T, id: number): Observable<T>;

  store?(model: T): Observable<T>;

  delete?(id: number): Observable<boolean>;
}
