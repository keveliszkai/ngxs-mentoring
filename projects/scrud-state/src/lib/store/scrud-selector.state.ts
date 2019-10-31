import { Type } from '@angular/core';
import { elvis } from '../internal';
import { ScrudStateModel, StateSelector } from '../models/scrud-state.model';
import { ScrudHandlerState } from './scrud-handler.state';
import { ScrudState } from './scrud.state';
import { ListFilter } from '../models/list-filter.model';
import { ListOrder } from '../models/list-order.model';
import { PaginateObject } from '../models/paginate-object.model';

// @dynamic
export abstract class ScrudSelectorState<T extends {}> extends ScrudHandlerState<T> {
  protected constructor(
    protected readonly storeClass: Type<ScrudState<T>>,
    protected readonly service: any,
  ) {
    super(storeClass, service);
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

  static get filters(): StateSelector<ListFilter[]> {
    const that = this;
    return state => {
      const subState = elvis(state, that.staticStorePath) as ScrudStateModel<any>;
      return subState.filters.value;
    };
  }

  static get orders(): StateSelector<ListOrder[]> {
    const that = this;
    return state => {
      const subState = elvis(state, that.staticStorePath) as ScrudStateModel<any>;
      return subState.orders.value;
    };
  }

  static get paginateObject(): StateSelector<PaginateObject> {
    const that = this;
    return state => {
      const subState = elvis(state, that.staticStorePath) as ScrudStateModel<any>;
      return subState.paginateObject;
    };
  }
}
