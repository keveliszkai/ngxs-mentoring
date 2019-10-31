import { generateActionObject } from '../../internal';
import { ScrudState } from '../../scrud-state';
import { Type } from '@angular/core';
import { EntityActionType } from '../type-alias';

export class GetList {
  constructor(target: Type<ScrudState<any>>) {
    return generateActionObject(EntityActionType.GetList, target);
  }
}
