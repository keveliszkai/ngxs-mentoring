import { ScrudState, ScrudStateModel, defaultEntityState } from 'scrud-state';
import { Todo } from '../models/todo.model';
import { State, Action, StateContext } from '@ngxs/store';
import { TodoService } from '../services/todo.service';
import { CustomFeature } from './todo.actions';

@State<ScrudStateModel<Todo>>({
  name: 'todoScrud',
  defaults: defaultEntityState(),
})
export class TodoCrudState extends ScrudState<Todo> {
  constructor(readonly service: TodoService) {
    super(TodoCrudState, service);
  }

  @Action(CustomFeature)
  customFeature(ctx: StateContext<TodoCrudState>, { payload }: CustomFeature) {
    alert(payload.value);
  }
}
