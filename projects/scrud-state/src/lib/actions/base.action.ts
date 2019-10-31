import { ScrudState } from '../store/scrud.state';
import { Type } from '@angular/core';
export abstract class BaseAction<T, R> {
  public payload: R;
  public type: string;
  private readonly NGXS_META_KEY = 'NGXS_META';

  constructor(fn: string, store: Type<ScrudState<T>>, payload?: R) {
    this.payload = payload;
    this.type = `[${store[this.NGXS_META_KEY].path}] ${fn}`;
  }
}
