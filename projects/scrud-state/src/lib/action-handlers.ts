import {
  ofAction,
  ofActionCompleted,
  ofActionDispatched,
  ofActionErrored,
  ofActionSuccessful,
} from '@ngxs/store';
import { NGXS_META_KEY } from './internal';
import { ScrudState } from './store/scrud.state';
import { Type } from '@angular/core';
import { ActionTypes } from './actions/action-types.enum';

export const ofEntityAction = (state: Type<ScrudState<any>>, actionType: ActionTypes) => {
  const statePath = state[NGXS_META_KEY].path;
  const type = `[${statePath}] ${actionType}`;
  return ofAction({
    type,
  });
};

export const ofEntityActionDispatched = (state: Type<ScrudState<any>>, actionType: ActionTypes) => {
  const statePath = state[NGXS_META_KEY].path;
  const type = `[${statePath}] ${actionType}`;
  return ofActionDispatched({
    type,
  });
};

export const ofEntityActionSuccessful = (state: Type<ScrudState<any>>, actionType: ActionTypes) => {
  const statePath = state[NGXS_META_KEY].path;
  const type = `[${statePath}] ${actionType}`;
  return ofActionSuccessful({
    type,
  });
};

export const ofEntityActionErrored = (state: Type<ScrudState<any>>, actionType: ActionTypes) => {
  const statePath = state[NGXS_META_KEY].path;
  const type = `[${statePath}] ${actionType}`;
  return ofActionErrored({
    type,
  });
};

export const ofEntityActionCompleted = (state: Type<ScrudState<any>>, actionType: ActionTypes) => {
  const statePath = state[NGXS_META_KEY].path;
  const type = `[${statePath}] ${actionType}`;
  return ofActionCompleted({
    type,
  });
};

// there are no cancelable actions, thus there is no need for a ofEntityActionCanceled action handler
