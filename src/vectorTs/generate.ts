import { type Vector2D } from "./core";
import { randomNumberBetween } from "./core/utils";
import { vectorTs } from "./vectorTs";

export const xavierInitialization = (
  inputSize: number,
  outputSize: number
): Vector2D => {
  const unitSqrt = 1.0 / Math.sqrt(inputSize);

  return vectorTs.create2D(
    Array.from({ length: inputSize }, () =>
      Array.from({ length: outputSize }, () =>
        randomNumberBetween(-unitSqrt, unitSqrt)
      )
    )
  );
};
