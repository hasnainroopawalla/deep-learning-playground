type IVector1D = number[];
type IVector2D = number[][];

abstract class Vector<T> {
  data: T;

  constructor(data: T) {
    this.data = data;
  }

  abstract get shape(): number[];
}

export class Vector1D extends Vector<IVector1D> {
  constructor(data: IVector1D) {
    super(data);
  }

  get shape() {
    return [this.data.length];
  }
}

export class Vector2D extends Vector<IVector2D> {
  constructor(data: IVector2D) {
    super(data);
  }

  get shape() {
    return [this.data.length, this.data[0].length];
  }
}
