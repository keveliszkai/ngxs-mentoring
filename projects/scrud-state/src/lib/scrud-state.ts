import { Type } from '@angular/core';
import { StateContext } from '@ngxs/store';
import {
  EntityActionType,
  EntitySetErrorAction,
  EntitySetLoadingAction,
  SetError,
  EntityGetModelAction,
  GetModel,
} from './actions';
import { asArray, Dictionary, elvis, NGXS_META_KEY } from './internal';
import { ScrudStateModel, StateSelector } from './models';
import { GetListError, GetModelError } from './errors';

/**
 * Returns a new object which serves as the default state.
 * No entities, loading is false, error is undefined, active is undefined.
 * pageSize is 10 and pageIndex is 0.
 */
export function defaultEntityState<T>(
  defaults: Partial<ScrudStateModel<T>> = {},
): ScrudStateModel<T> {
  return {
    list: [],
    loading: false,
    paginateObject: {},
  };
}

// @dynamic
export abstract class ScrudState<T extends {}> {
  private readonly storePath: string;

  protected constructor(
    protected readonly storeClass: Type<ScrudState<T>>,
    protected readonly service: any,
  ) {
    this.storePath = storeClass[NGXS_META_KEY].path;
    this.setup(storeClass, Object.values(EntityActionType));
  }

  private static get staticStorePath(): string {
    const that = this;
    return that[NGXS_META_KEY].path;
  }

  // ------------------- SELECTORS -------------------

  /**
   * Returns a selector for all entities, sorted by insertion order
   */
  static get list(): StateSelector<any[]> {
    const that = this;
    return state => {
      const subState = elvis(state, that.staticStorePath) as ScrudStateModel<any>;
      return subState.list;
    };
  }

  /**
   * Returns a selector for the size of the entity map
   */
  static get size(): StateSelector<number> {
    const that = this;
    return state => {
      const subState = elvis(state, that.staticStorePath) as ScrudStateModel<any>;
      return subState.paginateObject.size;
    };
  }

  /**
   * Returns a selector for the error
   */
  static get error(): StateSelector<Error | undefined> {
    const that = this;
    return state => {
      const subState = elvis(state, that.staticStorePath) as ScrudStateModel<any>;
      return subState.error;
    };
  }

  /**
   * Returns a selector for the loading state
   */
  static get loading(): StateSelector<boolean> {
    const that = this;
    return state => {
      const subState = elvis(state, that.staticStorePath) as ScrudStateModel<any>;
      return subState.loading;
    };
  }

  static get model(): StateSelector<any> {
    const that = this;
    return state => {
      const subState = elvis(state, that.staticStorePath) as ScrudStateModel<any>;
      return subState.model;
    };
  }

  // ------------------- ACTION HANDLERS -------------------

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
      this.service.getAll(10).subscribe(
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

  reset({ setState }: StateContext<ScrudStateModel<T>>) {
    setState(defaultEntityState());
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

  // ------------------- UTILITY -------------------

  private setup(storeClass: Type<ScrudState<T>>, actions: string[]) {
    // validation if a matching action handler exists has moved to reflection-validation tests
    actions.forEach(fn => {
      const actionName = `[${this.storePath}] ${fn}`;
      storeClass[NGXS_META_KEY].actions[actionName] = [
        {
          fn,
          options: {},
          type: actionName,
        },
      ];
    });
  }
}
