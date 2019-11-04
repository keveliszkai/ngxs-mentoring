import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoCrudState } from '../store/todo-crud.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { ScrudListComponent } from '@stilldesign/scrud';
import { PaginateObject } from '@stilldesign/common';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent extends ScrudListComponent<Todo> implements OnInit, OnDestroy {
  @Select(TodoCrudState.list)
  public list$: Observable<Todo[]>;

  @Select(TodoCrudState.loading)
  public loading$: Observable<boolean>;

  @Select(TodoCrudState.paginateObject)
  public paginateObject$: Observable<PaginateObject>;

  constructor(readonly store: Store) {
    super(store, TodoCrudState);
  }

  public ngOnInit() {
    super.ngOnInit();
  }

  public ngOnDestroy() {
    super.ngOnDestroy();
  }
}
