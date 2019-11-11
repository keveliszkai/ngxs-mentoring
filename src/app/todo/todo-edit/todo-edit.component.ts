import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../models/todo.model';
import { ScrudEditComponent } from '@stilldesign/scrud';
import { Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { TodoCrudState } from '../store/todo-crud.state';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss'],
})
export class TodoEditComponent extends ScrudEditComponent<Todo> implements OnInit, OnDestroy {
  constructor(protected readonly store: Store, protected readonly route: ActivatedRoute) {
    super(store, TodoCrudState, route);
  }

  public ngOnInit() {
    super.ngOnInit();
  }

  public ngOnDestroy() {
    super.ngOnDestroy();
  }
}
