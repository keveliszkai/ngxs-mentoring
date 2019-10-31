import { generateActionObject } from '../internal';
import { CrudState } from '../crud-state';
import { Type } from '@angular/core';
import { EntityActionType } from './type-alias';

export interface EntityGetModelAction {
  id: number | string;
}

export class GetModel {
  constructor(target: Type<CrudState<any>>, public payload: EntityGetModelAction) {
    return generateActionObject(EntityActionType.GetModel, target, payload);
  }
}
