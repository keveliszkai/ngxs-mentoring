import { Type } from '@angular/core';
import { StateContext } from '@ngxs/store';
import {
  EntitySetErrorAction,
  EntitySetLoadingAction,
  SetError,
  GetModel,
  SetPageSize,
  GetList,
  GoToPage,
} from '../actions';
import { ScrudStateModel } from '../models/scrud-state.model';
import { GetListError, GetModelError } from '../errors';
import { ScrudBaseState } from './scrud-base.state';
import { ScrudState } from './scrud.state';
import { defaultEntityState } from './default-entity-state.function';
import { ServiceBase } from '../models/service-base.interface';

// @dynamic
export abstract class ScrudHandlerState<T extends {}> extends ScrudBaseState<T> {
  protected constructor(
    protected readonly storeClass: Type<ScrudState<T>>,
    protected readonly service: ServiceBase<T>,
  ) {
    super(storeClass, service);
  }

  getModel(ctx: StateContext<ScrudStateModel<T>>, { payload }: GetModel) {
    const state = ctx.getState();
    if (!(state.model && (state.model as any).id === payload.id)) {
      ctx.patchState({ loading: true });
      this.service
        .getById(+payload.id)
        .subscribe(
          model => ctx.patchState({ model, loading: false }),
          () => ctx.dispatch(new SetError(this.storeClass, new GetModelError())),
        );
    }
  }

  getList(ctx: StateContext<ScrudStateModel<T>>) {
    const state = ctx.getState();

    if (state.list.length) {
      ctx.patchState({ list: state.list });
    } else {
      ctx.patchState({ loading: true });
      this.service
        .getAll({
          size: state.paginateObject.itemsPerPage,
          page: state.paginateObject.currentPage,
        })
        .subscribe(
          list =>
            ctx.patchState({
              list,
              loading: false,
            }),
          () => ctx.dispatch(new SetError(this.storeClass, new GetListError())),
        );
    }
  }

  createModel(ctx: StateContext<ScrudStateModel<T>>) {}
  updateModel(ctx: StateContext<ScrudStateModel<T>>) {}

  setPageSize(ctx: StateContext<ScrudStateModel<T>>, { payload }: SetPageSize) {
    const state = ctx.getState();
    ctx.patchState({
      paginateObject: {
        ...state.paginateObject,
        itemsPerPage: payload.size,
      },
    });
    ctx.dispatch(new GetList(this.storeClass));
  }

  goToPage(ctx: StateContext<ScrudStateModel<T>>, { payload }: GoToPage) {
    const state = ctx.getState();
    ctx.patchState({
      paginateObject: {
        ...state.paginateObject,
        currentPage: payload.page,
      },
    });

    // Not working...
    return ctx.dispatch(new GetList(this.storeClass));
  }

  setLoading(
    { patchState }: StateContext<ScrudStateModel<T>>,
    { payload }: EntitySetLoadingAction,
  ) {
    patchState({ loading: payload });
  }

  setError({ patchState }: StateContext<ScrudStateModel<T>>, { payload }: EntitySetErrorAction) {
    patchState({ error: payload });
  }

  reset({ setState }: StateContext<ScrudStateModel<T>>) {
    setState(defaultEntityState());
  }
}
