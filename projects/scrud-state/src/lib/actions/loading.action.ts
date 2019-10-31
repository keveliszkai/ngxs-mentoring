import { generateActionObject } from '../internal';
import { ScrudState } from '../store/scrud.state';
import { Type } from '@angular/core';
import { EntityActionType } from './type-alias';

export interface EntitySetLoadingAction {
  payload: boolean;
}

export class SetLoading {
  /**
   * Generates an action that will set the loading state for the given state.
   * @param target The targeted state class
   * @param loading The loading state
   */
  constructor(target: Type<ScrudState<any>>, loading: boolean) {
    return generateActionObject(EntityActionType.SetLoading, target, loading);
  }
}
