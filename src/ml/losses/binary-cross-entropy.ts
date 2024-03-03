import { Vector2D, vectorTs } from "../../vectorTs";

export class BinaryCrossEntropy {
  constructor() {}

  public objective1(actual: Vector2D, predicted: Vector2D): number {
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
    return vectorTs
      .negative(vectorTs.mean(vectorTs.add(term0, term1), "column"))
      .squeeze();
  }

  public objective(actual: Vector2D, predicted: Vector2D): number {
    const m = actual.shape[1];

    console.log(vectorTs.exp(vectorTs.negative(vectorTs.abs(predicted))));

    // eq: (1/m) * np.sum(np.maximum(Z, 0) - Z*Y + np.log(1+ np.exp(- np.abs(Z))))
    const result =
      (1 / m) *
      vectorTs.sum(
        vectorTs.sub(
          vectorTs.maximum(predicted, 0),
          vectorTs.add(
            vectorTs.multiply(predicted, actual),
            vectorTs.log(
              vectorTs.add(
                1,
                vectorTs.exp(vectorTs.negative(vectorTs.abs(predicted)))
              )
            )
          )
        ),
        "all"
      );
    return result;
  }
}
