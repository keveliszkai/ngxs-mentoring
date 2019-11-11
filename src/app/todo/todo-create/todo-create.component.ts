import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrudCreateComponent } from '@stilldesign/scrud';
import { Todo } from '../models/todo.model';
import { Store, Actions } from '@ngxs/store';
import { TodoCrudState } from '../store/todo-crud.state';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss'],
})
export class TodoCreateComponent extends ScrudCreateComponent<Todo> implements OnInit, OnDestroy {
  constructor(
    protected readonly store: Store,
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly actions$: Actions,
  ) {
    super(store, TodoCrudState, router, route, actions$);
  }

  public createModel(): Todo {
    return {} as Todo;
  }

  public ngOnInit() {
    super.ngOnInit();
  }

  public ngOnDestroy() {
    super.ngOnDestroy();
  }
}
