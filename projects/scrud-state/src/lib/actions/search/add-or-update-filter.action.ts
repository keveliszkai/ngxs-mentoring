import { generateActionObject } from '../../internal';
import { ScrudState } from '../../store/scrud.state';
import { Type } from '@angular/core';
import { EntityActionType } from '../type-alias';
import { ListFilter } from '../../models/list-filter.model';

export interface AddOrUpdateFilterAction {
  filter: ListFilter;
}

export class AddOrUpdateFilter {
  constructor(target: Type<ScrudState<any>>, public payload: AddOrUpdateFilterAction) {
    return generateActionObject(EntityActionType.GetModel, target, payload);
  }
}
