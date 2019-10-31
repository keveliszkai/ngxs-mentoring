import { Type } from '@angular/core';
import { ScrudSelectorState } from './scrud-selector.state';
import { ServiceBase } from '../models/service-base.interface';

// @dynamic
export abstract class ScrudState<T extends {}> extends ScrudSelectorState<T> {
  protected constructor(
    protected readonly storeClass: Type<ScrudState<T>>,
    protected readonly service: ServiceBase<T>,
  ) {
    super(storeClass, service);
  }
}
