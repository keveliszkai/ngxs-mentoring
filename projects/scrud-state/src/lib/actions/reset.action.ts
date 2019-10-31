import { generateActionObject } from '../internal';
import { ScrudState } from '../store/scrud.state';
import { Type } from '@angular/core';
import { ActionTypes } from './action-types.enum';

export class Reset {
  /**
   * Resets the targeted store to the default state: no entities, loading is false, error is undefined, active is undefined.
   * @param target The targeted state class
   * @see defaultEntityState
   */
  constructor(target: Type<ScrudState<any>>) {
    return generateActionObject(ActionTypes.Reset, target);
  }
}
