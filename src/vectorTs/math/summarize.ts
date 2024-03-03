import { zeros2D } from "../adapters";
import { Vector2D } from "../core";

// numpy.sum: https://numpy.org/doc/stable/reference/generated/numpy.sum.html
export const sum = <
  T extends "row" | "column" | "all",
  R = T extends "all" ? number : Vector2D
>(
  vector: Vector2D,
  axis: T
): R => {
  const [numRows, numCols] = vector.shape;

  const result = axis === "row" ? zeros2D(numRows, 1) : zeros2D(1, numCols);
  let totalSum = 0;

  switch (axis) {
    case "row": // axis=1
      for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
          result.data[i][0] += vector.data[i][j];
        }
      }
      break;

    case "column": // axis=0
      for (let i = 0; i < numCols; i++) {
        for (let j = 0; j < numRows; j++) {
          result.data[0][i] += vector.data[j][i];
        }
      }
      break;

    default: // sum up all elements
      for (let i = 0; i < numCols; i++) {
        for (let j = 0; j < numRows; j++) {
          totalSum += vector.data[j][i];
        }
      }
      break;
  }

  return axis === "all" ? (totalSum as R) : (result as R);
};

// numpy.mean: https://numpy.org/doc/stable/reference/generated/numpy.mean.html
export const mean = (vector: Vector2D, axis: "row" | "column"): Vector2D => {
  const [numRows, numCols] = vector.shape;

  const result = axis === "row" ? zeros2D(numRows, 1) : zeros2D(1, numCols);

  switch (axis) {
    case "row": // axis=1
      for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
          result.data[i][0] += vector.data[i][j];
        }
        result.data[i][0] /= numCols;
      }
      break;

    case "column": // axis=0
      for (let i = 0; i < numCols; i++) {
        for (let j = 0; j < numRows; j++) {
          result.data[0][i] += vector.data[j][i];
        }
        result.data[0][i] /= numRows;
      }
      break;
  }
  return result;
};
