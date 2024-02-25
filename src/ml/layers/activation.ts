import { Vector2D, vectorTs } from "../../vectorTs";
import { Layer } from "./base-layer";

export class Sigmoid extends Layer {
  constructor() {
    super(0, 0);
  }

  public forward(inputData: Vector2D): Vector2D {
    // 1 / (1 + exp(-X))
    return vectorTs.divide(
      1,
      vectorTs.add(1, vectorTs.exp(vectorTs.negative(inputData)))
    );
  }

  public backward(inputData: Vector2D): Vector2D {
    const forward = this.forward(inputData);
    // forward(X) * (1 - forward(X))
    return vectorTs.multiply(forward, vectorTs.sub(1, forward));
  }
}
