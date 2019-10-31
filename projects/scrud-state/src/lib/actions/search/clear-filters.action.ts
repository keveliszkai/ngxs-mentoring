import { generateActionObject } from '../../internal';
import { ScrudState } from '../../store/scrud.state';
import { Type } from '@angular/core';
import { EntityActionType } from '../type-alias';

export class ClearFilters {
  constructor(target: Type<ScrudState<any>>) {
    return generateActionObject(EntityActionType.GetModel, target);
  }
}
