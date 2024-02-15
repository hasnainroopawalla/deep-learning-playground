export abstract class Vector<T> {
  data: T;

  constructor(data: T) {
    this.data = data;
  }

  abstract get shape(): number[];
}
