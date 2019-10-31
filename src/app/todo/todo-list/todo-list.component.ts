import { Component, OnInit } from '@angular/core';
import { TodoCrudState } from '../store/todo-crud.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { GetList } from 'scrud-state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Select(TodoCrudState.list)
  public list$: Observable<Todo[]>;

  @Select(TodoCrudState.loading)
  public loading$: Observable<Todo[]>;

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetList(TodoCrudState));
  }
}
