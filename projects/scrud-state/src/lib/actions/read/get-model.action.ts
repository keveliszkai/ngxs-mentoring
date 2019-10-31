import { ScrudState } from '../../store/scrud.state';
import { Type } from '@angular/core';
import { ActionTypes } from '../action-types.enum';
import { BaseAction } from '../base.action';

export interface GetModelActionPayload {
  id: number | string;
}

export class GetModel extends BaseAction<any, GetModelActionPayload> {
  constructor(target: Type<ScrudState<any>>, payload: GetModelActionPayload) {
    super(ActionTypes.GetModel, target, payload);
  }
}
