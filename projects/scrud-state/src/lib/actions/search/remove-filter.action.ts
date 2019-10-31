import { generateActionObject } from '../../internal';
import { ScrudState } from '../../store/scrud.state';
import { Type } from '@angular/core';
import { ActionTypes } from '../action-types.enum';

export interface RemoveFilterAction {
  key: string;
}

export class RemoveFilter {
  constructor(target: Type<ScrudState<any>>, public payload: RemoveFilterAction) {
    return generateActionObject(ActionTypes.GetModel, target, payload);
  }
}
