import { Vector } from "./vector";

type IVector1D = number[];

export class Vector1D extends Vector<IVector1D> {
  constructor(data: IVector1D) {
    super(data);
  }

  get shape() {
    return [this.data.length];
  }
}
