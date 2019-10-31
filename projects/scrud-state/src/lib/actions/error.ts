import { generateActionObject } from '../internal';
import { ScrudState } from '../scrud-state';
import { Type } from '@angular/core';
import { EntityActionType } from './type-alias';

export interface EntitySetErrorAction {
  payload: Error;
}

export class SetError {
  /**
   * Generates an action that will set the error state for the given state.
   * Put undefined to clear the error state.
   * @param target The targeted state class
   * @param error The error that describes the error state
   */
  constructor(target: Type<ScrudState<any>>, error: Error | undefined) {
    return generateActionObject(EntityActionType.SetError, target, error);
  }
}
