import { generateActionObject } from '../../internal';
import { ScrudState } from '../../store/scrud.state';
import { Type } from '@angular/core';
import { ActionTypes } from '../action-types.enum';

export class GetList {
  constructor(target: Type<ScrudState<any>>) {
    return generateActionObject(ActionTypes.GetList, target);
  }
}
