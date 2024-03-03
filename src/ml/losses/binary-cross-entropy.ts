import { Vector2D, vectorTs } from "../../vectorTs";

export class BinaryCrossEntropy {
  constructor() {}
  public objective(actual: Vector2D, predicted: Vector2D): number {
    // eq: (1/m) * np.sum(np.maximum(Z, 0) - Z*Y + np.log(1+ np.exp(- np.abs(Z))))

    const m = actual.shape[1];

    const result =
      (1 / m) *
      vectorTs.sum(
        vectorTs.eq2(
          actual,
          predicted,
          (y, z) =>
            Math.max(z, 0) - z * y + Math.log(1 + Math.exp(-Math.abs(z)))
        ),
        "all"
      );
    return result;
  }

  public gradient(actual: Vector2D, predicted: Vector2D): Vector2D {
    // eq: (1/m) * ((1/(1+np.exp(- Z))) - Y)

    const m = actual.shape[1];

    const result = vectorTs.multiply(
      1 / m,
      vectorTs.eq2(actual, predicted, (y, z) => 1 / (1 + Math.exp(-z)) - y)
    );
    return result;
  }
}
