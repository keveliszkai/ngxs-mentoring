import { generateActionObject } from '../../internal';
import { ScrudState } from '../../store/scrud.state';
import { Type } from '@angular/core';
import { ActionTypes } from '../action-types.enum';
import { ListFilter } from '../../models/list-filter.model';

export interface SetFiltersAction {
  filters: ListFilter[];
}

export class SetFilters {
  constructor(target: Type<ScrudState<any>>, public payload: SetFiltersAction) {
    return generateActionObject(ActionTypes.GetModel, target, payload);
  }
}
