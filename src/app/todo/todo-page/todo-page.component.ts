import { Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { ScrudPageComponent } from '@stilldesign/scrud';
import { Todo } from '../models/todo.model';
import { FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent extends ScrudPageComponent<Todo> implements OnChanges, OnDestroy {
  constructor(private readonly fb: FormBuilder) {
    super();
  }

  public modelToForm(model: Todo): any {
    return this.fb.group({
      id: model.id,
      title: [model.title, Validators.required],
      completed: model.completed,
    });
  }

  public formToModel(form: any): Todo {
    const newModel = _.cloneDeep(this.model);
    newModel.id = form.get('id').value;
    newModel.completed = form.get('completed').value;
    newModel.title = form.get('title').value;
    return newModel;
  }

  public ngOnDestroy() {
    super.ngOnDestroy();
  }

  public ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
  }
}
