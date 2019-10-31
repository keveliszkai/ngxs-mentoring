import { generateActionObject } from '../../internal';
import { ScrudState } from '../../store/scrud.state';
import { Type } from '@angular/core';
import { EntityActionType } from '../type-alias';

export interface RemoveFilterAction {
  key: string;
}

export class RemoveFilter {
  constructor(target: Type<ScrudState<any>>, public payload: RemoveFilterAction) {
    return generateActionObject(EntityActionType.GetModel, target, payload);
  }
}
