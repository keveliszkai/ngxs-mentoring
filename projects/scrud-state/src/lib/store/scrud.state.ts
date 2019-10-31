import { Type } from '@angular/core';
import { ScrudSelectorState } from './scrud-selector.state';

// @dynamic
export abstract class ScrudState<T extends {}> extends ScrudSelectorState<T> {
  protected constructor(
    protected readonly storeClass: Type<ScrudState<T>>,
    protected readonly service: any,
  ) {
    super(storeClass, service);
  }
}
