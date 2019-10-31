import { ScrudState, ScrudStateModel, defaultEntityState } from 'scrud-state';
import { Todo } from '../models/todo.model';
import { State } from '@ngxs/store';
import { TodoService } from '../services/todo.service';

@State<ScrudStateModel<Todo>>({
  name: 'todoScrud',
  defaults: defaultEntityState(),
})
export class TodoCrudState extends ScrudState<Todo> {
  constructor(readonly service: TodoService) {
    super(TodoCrudState, service);
  }
}
