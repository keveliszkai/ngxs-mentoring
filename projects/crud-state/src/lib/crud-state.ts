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
import { InvalidIdError, NoSuchEntityError, UpdateFailedError } from './errors';
import { asArray, Dictionary, elvis, NGXS_META_KEY } from './internal';
import { CrudStateModel, StateSelector } from './models';

/**
 * Returns a new object which serves as the default state.
 * No entities, loading is false, error is undefined, active is undefined.
 * pageSize is 10 and pageIndex is 0.
 */
export function defaultEntityState<T>(
  defaults: Partial<CrudStateModel<T>> = {},
): CrudStateModel<T> {
  return {
    list: [],
    loading: false,
    paginateObject: {},
  };
}

// @dynamic
export abstract class CrudState<T extends {}> {
  private readonly storePath: string;

  protected constructor(
    protected readonly storeClass: Type<CrudState<T>>,
    protected readonly service: any,
  ) {
    this.storePath = storeClass[NGXS_META_KEY].path;
    this.setup(storeClass, Object.values(EntityActionType));
  }

  private static get staticStorePath(): string {
    const that = this;
    return that[NGXS_META_KEY].path;
  }

  /**
   * This function is called every time an entity is updated.
   * It receives the current entity and a partial entity that was either passed directly or generated with a function.
   * The default implementation uses the spread operator to create a new entity.
   * You must override this method if your entity type does not support the spread operator.
   * @see Updater
   * @param current The current entity, readonly
   * @param updated The new data as a partial entity
   * @example
   * // default behavior
   * onUpdate(current: Readonly<T updated: Partial<T>): T {
  return {...current, ...updated};
 }
   */
  onUpdate(current: Readonly<T>, updated: Partial<T>): T {
    return { ...current, ...updated } as T;
  }

  // ------------------- SELECTORS -------------------

  /**
   * Returns a selector for all entities, sorted by insertion order
   */
  static get list(): StateSelector<any[]> {
    const that = this;
    return state => {
      const subState = elvis(state, that.staticStorePath) as CrudStateModel<any>;
      return subState.list;
    };
  }

  /**
   * Returns a selector for the size of the entity map
   */
  static get size(): StateSelector<number> {
    const that = this;
    return state => {
      const subState = elvis(state, that.staticStorePath) as CrudStateModel<any>;
      return subState.paginateObject.size;
    };
  }

  /**
   * Returns a selector for the error
   */
  static get error(): StateSelector<Error | undefined> {
    const that = this;
    return state => {
      const subState = elvis(state, that.staticStorePath) as CrudStateModel<any>;
      return subState.error;
    };
  }

  /**
   * Returns a selector for the loading state
   */
  static get loading(): StateSelector<boolean> {
    const that = this;
    return state => {
      const subState = elvis(state, that.staticStorePath) as CrudStateModel<any>;
      return subState.loading;
    };
  }

  static get model(): StateSelector<any> {
    const that = this;
    return state => {
      const subState = elvis(state, that.staticStorePath) as CrudStateModel<any>;
      return subState.model;
    };
  }

  // ------------------- ACTION HANDLERS -------------------

  getModel(ctx: StateContext<CrudStateModel<T>>, { payload }: GetModel) {
    const state = ctx.getState();
    if (!(state.model && (state.model as any).id === payload.id)) {
      ctx.patchState({ loading: true });
      this.service
        .getById(+payload.id)
        .subscribe(
          model => ctx.patchState({ model, loading: false }),
          () => ctx.dispatch(new SetError(this.storeClass, null)),
        );
    }
  }

  getList(ctx: StateContext<CrudStateModel<T>>) {
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
        () => ctx.dispatch(new SetError(this.storeClass, null)),
      );
    }
  }
  createModel(ctx: StateContext<CrudStateModel<T>>) {}
  updateModel(ctx: StateContext<CrudStateModel<T>>) {}

  reset({ setState }: StateContext<CrudStateModel<T>>) {
    setState(defaultEntityState());
  }

  setLoading({ patchState }: StateContext<CrudStateModel<T>>, { payload }: EntitySetLoadingAction) {
    patchState({ loading: payload });
  }

  setError({ patchState }: StateContext<CrudStateModel<T>>, { payload }: EntitySetErrorAction) {
    patchState({ error: payload });
  }

  // ------------------- UTILITY -------------------

  private setup(storeClass: Type<CrudState<T>>, actions: string[]) {
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
