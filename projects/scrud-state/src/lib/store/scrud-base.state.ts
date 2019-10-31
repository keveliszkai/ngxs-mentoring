import { Type } from '@angular/core';
import { ActionTypes } from '../actions';
import { NGXS_META_KEY } from '../internal';
import { ScrudState } from './scrud.state';
import { ServiceBase } from '../models/service-base.interface';

// @dynamic
export abstract class ScrudBaseState<T extends {}> {
  protected readonly storePath: string;

  protected constructor(
    protected readonly storeClass: Type<ScrudState<T>>,
    protected readonly service: ServiceBase<T>,
  ) {
    this.storePath = storeClass[NGXS_META_KEY].path;
    this.setup(storeClass, Object.values(ActionTypes));
  }

  protected static get staticStorePath(): string {
    return this[NGXS_META_KEY].path;
  }

  protected setup(storeClass: Type<ScrudState<T>>, actions: string[]) {
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
