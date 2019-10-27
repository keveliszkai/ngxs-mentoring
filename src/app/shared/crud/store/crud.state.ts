import { Selector, Action, StateContext } from '@ngxs/store';
import { CrudStateModel } from './crud.state-model';
import { CrudActions } from './crud.actions';
import { BlogActions } from '../../../blog/store/blog.actions';

// @State<CrudStateModel<Blog>>({
//   name: 'blog',
//   defaults: {
//     list: [],
//     isLoading: false,
//   },
// })
export abstract class CrudState<T> {
  constructor(readonly service: any) {}

  @Selector()
  static model(state: CrudStateModel<any>) {
    return state.model;
  }

  getList(ctx: StateContext<CrudStateModel<T>>, { payload }: CrudActions.GetList) {
    const state = ctx.getState();

    if (state.list.length) {
      ctx.dispatch(new CrudActions.GetListsSucceeded({ list: state.list }));
    } else {
      ctx.patchState({ isLoading: true });
      this.service
        .getAll(payload.size)
        .subscribe(
          list => ctx.dispatch(new BlogActions.GetBlogsSucceeded({ list })),
          () => ctx.dispatch(new CrudActions.GetListsFailed()),
        );
    }
  }

  getListsSucceeded(
    ctx: StateContext<CrudStateModel<T>>,
    { payload }: CrudActions.GetListsSucceeded<T>,
  ) {
    ctx.patchState({
      list: payload.list,
      isLoading: false,
    });
  }

  getModel(ctx: StateContext<CrudStateModel<T>>, { payload }: CrudActions.GetModel) {
    const state = ctx.getState();
    if (state.model && (state.model as any).id === payload.id) {
      ctx.dispatch(new CrudActions.GetModelSucceeded({ model: state.model }));
    } else {
      ctx.patchState({ isLoading: true });
      this.service
        .getById(+payload.id)
        .subscribe(
          model => ctx.dispatch(new CrudActions.GetModelSucceeded({ model })),
          () => ctx.dispatch(new CrudActions.GetModelFailed()),
        );
    }
  }
}

export interface Retek {
  id: any;
}
