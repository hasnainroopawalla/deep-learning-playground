import { Vector2D, vectorTs } from "../../vectorTs";
import { Layer } from "./base-layer";

export class Sigmoid extends Layer {
  constructor() {
    super(0, 0);
  }

  public forward(inputData: Vector2D): Vector2D {
    // eq: 1 / (1 + exp(-X))
    return vectorTs.eq1(inputData, (x) => 1 / (1 + Math.exp(-x)));
  }

  public backward(inputData: Vector2D): Vector2D {
    // eq: forward(X) * (1 - forward(X))
    const forward = this.forward(inputData);
    return vectorTs.eq1(forward, (x) => x * (1 - x));
  }
}
