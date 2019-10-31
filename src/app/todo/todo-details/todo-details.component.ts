import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TodoCrudState } from '../store/todo-crud.state';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { ActivatedRoute } from '@angular/router';
import { GetModel } from 'scrud-state';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss'],
})
export class TodoDetailsComponent {
  @Select(TodoCrudState.model)
  public list$: Observable<Todo>;

  @Select(TodoCrudState.loading)
  public loading$: Observable<boolean>;

  constructor(private readonly store: Store, private readonly route: ActivatedRoute) {
    this.route.params.subscribe(params =>
      this.store.dispatch(new GetModel(TodoCrudState, { id: +params.id })),
    );
  }
}
