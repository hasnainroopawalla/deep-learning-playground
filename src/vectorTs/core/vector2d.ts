import { Vector } from "./vector";
import { type Vector1D } from "./vector1d";

type IVector2D = Vector1D[];

export class Vector2D extends Vector<IVector2D> {
  constructor(data: IVector2D) {
    super(data);
  }

  get shape() {
    return [this.data.length, this.data[0].shape[0]];
  }
}
