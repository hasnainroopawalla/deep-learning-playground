import type { Vector1D, Vector2D } from "../core";
import { randomNumberBetween } from "../math";
import { arrayToVector1D, arrayToVector2D } from "./toVector";

export const xavierInitialization = (
  inputSize: number,
  outputSize: number
): Vector2D => {
  const unitSqrt = 1.0 / Math.sqrt(inputSize);

  return arrayToVector2D(
    Array.from({ length: inputSize }, () =>
      Array.from({ length: outputSize }, () =>
        randomNumberBetween(-unitSqrt, unitSqrt)
      )
    )
  );
};

// TODO: Can be made dimension generic
export const zeros1D = (numCols: number): Vector1D =>
  arrayToVector1D(Array.from({ length: numCols }, () => 0));

export const zeros2D = (numRows: number, numCols: number): Vector2D =>
  arrayToVector2D(
    Array.from({ length: numRows }, () =>
      Array.from({ length: numCols }, () => 0)
    )
  );
