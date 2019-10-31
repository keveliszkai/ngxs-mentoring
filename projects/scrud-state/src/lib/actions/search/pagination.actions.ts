import { ActionTypes } from '../action-types.enum';
import { Type } from '@angular/core';
import { ScrudState } from '../../store/scrud.state';
import { BaseAction } from '../base.action';

export interface GoToPagePayload {
  page: number;
}

export class GoToPage extends BaseAction<any, GoToPagePayload> {
  constructor(target: Type<ScrudState<any>>, payload: GoToPagePayload) {
    super(ActionTypes.GoToPage, target, payload);
  }
}

export interface SetPageSizePayload {
  size: number;
}

export class SetPageSize extends BaseAction<any, SetPageSizePayload> {
  constructor(target: Type<ScrudState<any>>, payload: SetPageSizePayload) {
    super(ActionTypes.SetPageSize, target, payload);
  }
}
