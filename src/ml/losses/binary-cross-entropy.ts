import { Vector2D, vectorTs } from "../../vectorTs";

export class BinaryCrossEntropy {
  constructor() {}

  public objective(actual: Vector2D, predicted: Vector2D) {
    const clippedPredicted = vectorTs.clip(predicted, 1e-7, 1 - 1e-7);

    // term0 = (1 - actual) * log(1 - predicted)
    const term0 = vectorTs.multiply(
      vectorTs.sub(1, actual),
      vectorTs.log(vectorTs.sub(1, clippedPredicted), true)
    );

    // term1 = actual * log(predicted)
    const term1 = vectorTs.multiply(
      actual,
      vectorTs.log(clippedPredicted, true)
    );

    // -mean(term1 + term2, axis=0)
    return vectorTs.negative(
      vectorTs.mean(vectorTs.add(term0, term1), "column")
    );
  }
}
