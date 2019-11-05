import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { TodoCrudState } from '../store/todo-crud.state';
import { Todo } from '../models/todo.model';
import { ScrudListComponent } from '@stilldesign/scrud';
import { Store } from '@ngxs/store';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent extends ScrudListComponent<Todo> implements OnInit, OnDestroy {
  public value;

  constructor(
    protected readonly store: Store,
    protected readonly route: ActivatedRoute,
    protected readonly router: Router,
  ) {
    super(store, TodoCrudState, route, router);
  }

  public ngOnInit() {
    super.ngOnInit();
  }

  public ngOnDestroy() {
    super.ngOnDestroy();
  }
}
