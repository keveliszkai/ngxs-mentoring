export class ArrayHandler<T> {
  private findKey = 'key';

  constructor(private array: T[]) {}

  public addOrUpdate(item: T) {
    const currentItem = this.array.find(i => i[this.findKey] === item[this.findKey]);

    if (currentItem) {
      this.set([...this.array.filter(i => i[this.findKey] !== item[this.findKey]), item]);
    } else {
      this.set([...this.array, item]);
    }
  }

  public removeByKey(key: string): void {
    this.array = this.array.filter(i => i[this.findKey] !== key);
  }

  public set(array: T[]) {
    this.array = array;
  }

  public clear() {
    this.array = [];
  }

  public get value(): T[] {
    return this.array;
  }
}
