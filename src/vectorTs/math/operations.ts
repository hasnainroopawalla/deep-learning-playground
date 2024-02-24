import { zeros2D } from "../adapters";
import { Vector2D } from "../core";

// numpy.log: https://numpy.org/doc/stable/reference/generated/numpy.log.html
export const log = (vector: Vector2D, safe = false) => {
  const [numRows, numCols] = vector.shape;

  const result = zeros2D(numRows, numCols);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      result.data[i][j] = Math.log(vector.data[i][j] + (safe ? 1e-7 : 0));
    }
  }

  return result;
};

// numpy.clip: https://numpy.org/doc/stable/reference/generated/numpy.clip.html
export const clip = (
  vector: Vector2D,
  vectorMin: number,
  vectorMax: number
) => {
  const [numRows, numCols] = vector.shape;

  const result = zeros2D(numRows, numCols);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      result.data[i][j] = Math.min(
        Math.max(vector.data[i][j], vectorMin),
        vectorMax
      );
    }
  }

  return result;
};
