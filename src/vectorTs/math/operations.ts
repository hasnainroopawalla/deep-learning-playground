import { zeros2D } from "../adapters";
import { Vector2D } from "../core";
import { maybeVectorsToVectors } from "./utils";

// numpy.sum: https://numpy.org/doc/stable/reference/generated/numpy.sum.html
export const sum = (vector: Vector2D, axis: "row" | "column"): Vector2D => {
  const [numRows, numCols] = vector.shape;

  const result = axis === "row" ? zeros2D(numRows, 1) : zeros2D(1, numCols);

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
  }
  return result;
};

// TODO: potentially use discriminated unions for args
export const sub = (v1: number | Vector2D, v2: number | Vector2D): Vector2D => {
  const [vector1, vector2] = maybeVectorsToVectors(v1, v2);

  const [numRows1, numCols1] = vector1.shape;
  const [numRows2, numCols2] = vector2.shape;

  if (numRows1 !== numRows2 || numCols1 !== numCols2) {
    throw new Error("Incompatible matrix dimensions");
  }

  const result = zeros2D(numRows1, numCols1);

  for (let i = 0; i < numRows1; i++) {
    for (let j = 0; j < numCols1; j++) {
      result.data[i][j] += vector1.data[i][j] - vector2.data[i][j];
    }
  }

  return result;
};
