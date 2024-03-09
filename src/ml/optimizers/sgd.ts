import { Vector2D, vectorTs } from "../../vectorTs";

const LEARNING_RATE = 0.001;

export class SGD {
  private previous;

  constructor() {
    this.previous = {
      weights: vectorTs.create2D([]),
      bias: 0.0,
    };
  }

  public static updateParameters(
    weights: Vector2D,
    bias: Vector2D,
    dw: Vector2D,
    db: Vector2D
  ) {
    // TODO: Add momentum
    // TODO Add bias
    const newWeights = vectorTs.sub(
      weights,
      vectorTs.multiply(LEARNING_RATE, dw)
    );
    const newBias = vectorTs.sub(bias, vectorTs.multiply(LEARNING_RATE, db));
    return { newWeights, newBias };
  }
}
