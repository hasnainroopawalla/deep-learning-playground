import { vectorTs } from "../vectorTs";
import { Vector } from "./vector";

type IVector2D = number[][]; // TODO:  Vector1D[];

export class Vector2D extends Vector<IVector2D> {
  constructor(data: IVector2D) {
    super(data);
  }

  public dot(v2: Vector2D) {
    const [numRows1, numCols1] = this.shape;
    const [numRows2, numCols2] = v2.shape;

    if (numCols1 !== numRows2) {
      throw new Error("Incompatible matrix dimensions");
    }

    const result = vectorTs.zeros2D(numRows1, numCols2);

    for (let i = 0; i < numRows1; i++) {
      for (let j = 0; j < numCols2; j++) {
        for (let k = 0; k < numCols1; k++) {
          result.data[i][j] += this.data[i][k] * v2.data[k][j];
        }
      }
    }

    return result;
  }

  get shape() {
    return [this.data.length, this.data[0].length];
  }
}
