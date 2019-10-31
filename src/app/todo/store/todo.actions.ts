export class CustomFeature {
  static readonly type = '[Todo] Custom Feature';
  constructor(public payload: { value: number }) {}
}
