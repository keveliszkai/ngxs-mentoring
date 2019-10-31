import { generateActionObject } from '../../internal';
import { ScrudState } from '../../store/scrud.state';
import { Type } from '@angular/core';
import { EntityActionType } from '../type-alias';
import { ListFilter } from '../../models/list-filter.model';

export interface SetFiltersAction {
  filters: ListFilter[];
}

export class SetFilters {
  constructor(target: Type<ScrudState<any>>, public payload: SetFiltersAction) {
    return generateActionObject(EntityActionType.GetModel, target, payload);
  }
}
