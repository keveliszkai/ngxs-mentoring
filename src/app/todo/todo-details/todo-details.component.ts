import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { TodoCrudState } from '../store/todo-crud.state';
import { Todo } from '../models/todo.model';
import { ActivatedRoute } from '@angular/router';
import { ScrudDetailsComponent } from '@stilldesign/scrud';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss'],
})
export class TodoDetailsComponent extends ScrudDetailsComponent<Todo> implements OnInit, OnDestroy {
  constructor(readonly store: Store, readonly route: ActivatedRoute) {
    super(store, TodoCrudState, route);
  }

  public ngOnInit() {
    super.ngOnInit();
  }

  public ngOnDestroy() {
    super.ngOnDestroy();
  }
}
