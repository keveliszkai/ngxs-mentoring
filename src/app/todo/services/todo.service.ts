import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { ServiceBase } from 'scrud-state';

@Injectable({
  providedIn: 'root',
})
export class TodoService implements ServiceBase<Todo> {
  constructor(private readonly http: HttpClient) {}

  public getAll(params: { page: number; size: number }): Observable<Todo[]> {
    return this.http.get<Todo[]>(
      `https://jsonplaceholder.typicode.com/todos?_page=${params.page}&_limit=${params.size}`,
    );
  }

  public getById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
