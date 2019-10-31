import { generateActionObject } from '../internal';
import { CrudState } from '../crud-state';
import { Type } from '@angular/core';
import { EntityActionType } from './type-alias';

export class GetList {
  constructor(target: Type<CrudState<any>>) {
    return generateActionObject(EntityActionType.GetList, target);
  }
}
