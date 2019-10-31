import { generateActionObject } from '../../internal';
import { ScrudState } from '../../store/scrud.state';
import { Type } from '@angular/core';
import { EntityActionType, Payload } from '../type-alias';

export type GetModelAction = Payload<GetModelActionPayload>;
export interface GetModelActionPayload {
  id: number | string;
}

export class GetModel {
  constructor(target: Type<ScrudState<any>>, payload: GetModelActionPayload) {
    return generateActionObject(EntityActionType.GetModel, target, payload);
  }
}
