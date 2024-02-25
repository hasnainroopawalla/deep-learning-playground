import { zeros2D } from "../adapters";
import { Vector2D } from "../core";
import { maybeVectorsToVectors } from "./utils";

// TODO: reduce duplication across these methods - before the core operation
// TODO: Consider rounding all numbers to 6 decimal places

export const add = (v1: number | Vector2D, v2: number | Vector2D): Vector2D => {
  const [vector1, vector2] = maybeVectorsToVectors(v1, v2);

  const [numRows1, numCols1] = vector1.shape;
  const [numRows2, numCols2] = vector2.shape;

  if (numRows1 !== numRows2 || numCols1 !== numCols2) {
    throw new Error("Incompatible matrix dimensions");
  }

  const result = zeros2D(numRows1, numCols1);

  for (let i = 0; i < numRows1; i++) {
    for (let j = 0; j < numCols1; j++) {
      result.data[i][j] += vector1.data[i][j] + vector2.data[i][j];
    }
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

// numpy.multiply: https://numpy.org/doc/stable/reference/generated/numpy.multiply.html
export const multiply = (
  v1: number | Vector2D,
  v2: number | Vector2D
): Vector2D => {
  const [vector1, vector2] = maybeVectorsToVectors(v1, v2);

  const [numRows1, numCols1] = vector1.shape;
  const [numRows2, numCols2] = vector2.shape;

  if (numRows1 !== numRows2 || numCols1 !== numCols2) {
    throw new Error("Incompatible matrix dimensions");
  }

  const result = zeros2D(numRows1, numCols1);

  for (let i = 0; i < numRows1; i++) {
    for (let j = 0; j < numCols1; j++) {
      result.data[i][j] += vector1.data[i][j] * vector2.data[i][j];
    }
  }

  return result;
};

// numpy.divide: https://numpy.org/doc/stable/reference/generated/numpy.divide.html
export const divide = (
  v1: number | Vector2D,
  v2: number | Vector2D
): Vector2D => {
  const [vector1, vector2] = maybeVectorsToVectors(v1, v2);

  const [numRows1, numCols1] = vector1.shape;
  const [numRows2, numCols2] = vector2.shape;

  if (numRows1 !== numRows2 || numCols1 !== numCols2) {
    throw new Error("Incompatible matrix dimensions");
  }

  const result = zeros2D(numRows1, numCols1);

  for (let i = 0; i < numRows1; i++) {
    for (let j = 0; j < numCols1; j++) {
      result.data[i][j] = vector1.data[i][j] / vector2.data[i][j];
    }
  }

  return result;
};

export const negative = (vector: Vector2D): Vector2D => {
  const [numRows1, numCols1] = vector.shape;

  const result = zeros2D(numRows1, numCols1);

  for (let i = 0; i < numRows1; i++) {
    for (let j = 0; j < numCols1; j++) {
      result.data[i][j] = -vector.data[i][j];
    }
  }

  return result;
};
