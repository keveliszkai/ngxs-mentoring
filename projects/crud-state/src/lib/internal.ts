import { CrudState } from './crud-state';
import { Type } from '@angular/core';
import { NoActiveEntityError } from './errors';
import { CrudStateModel } from './models';

/**
 * Type alias for an object literal.
 * Only allows strings as keys.
 */
export interface Dictionary<T> {
  [key: string]: T;
}

export const NGXS_META_KEY = 'NGXS_META';

/**
 * This function generates a new object for the ngxs Action with the given fn name
 * @param fn The name of the Action to simulate, e.g. "Remove" or "Update"
 * @param store The class of the targeted entity state, e.g. ZooState
 * @param payload The payload for the created action object
 */
export function generateActionObject<T>(fn: string, store: Type<CrudState<T>>, payload?: any) {
  const name = store[NGXS_META_KEY].path;
  const ReflectedAction = function(data: T) {
    this.payload = data;
  };
  const obj = new ReflectedAction(payload);
  // tslint:disable-next-line: no-string-literal
  Reflect.getPrototypeOf(obj).constructor['type'] = `[${name}] ${fn}`;
  return obj;
}

/**
 * Undefined-safe function to access the property given by path parameter
 * @param object The object to read from
 * @param path The path to the property
 */
export function elvis(object: any, path: string): any | undefined {
  return path ? path.split('.').reduce((value, key) => value && value[key], object) : object;
}

/**
 * Returns input as an array if it isn't one already
 * @param input The input to make an array if necessary
 */
export function asArray<T>(input: T | T[]): T[] {
  return Array.isArray(input) ? input : [input];
}
