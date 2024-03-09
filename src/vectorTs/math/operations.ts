import { arrayToVector2D, zeros2D } from "../adapters";
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
): Vector2D => {
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

// numpy.exp: https://numpy.org/doc/stable/reference/generated/numpy.exp.html
export const exp = (vector: Vector2D): Vector2D => {
  const [numRows, numCols] = vector.shape;

  const result = zeros2D(numRows, numCols);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      result.data[i][j] = Math.exp(vector.data[i][j]);
    }
  }

  return result;
};

// numpy.abs: https://numpy.org/doc/stable/reference/generated/numpy.abs.html
export const abs = (vector: Vector2D): Vector2D => {
  const [numRows, numCols] = vector.shape;

  const result = zeros2D(numRows, numCols);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      result.data[i][j] = Math.abs(vector.data[i][j]);
    }
  }

  return result;
};

// numpy.maximum: https://numpy.org/doc/stable/reference/generated/numpy.maximum.html
export const maximum = (vector: Vector2D, value: number) => {
  const [numRows, numCols] = vector.shape;

  const result = zeros2D(numRows, numCols);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      result.data[i][j] = Math.max(vector.data[i][j], value);
    }
  }

  return result;
};

export const transpose = (vector: Vector2D): Vector2D => {
  return arrayToVector2D(
    vector.data[0].map((_, colIndex) => vector.data.map((row) => row[colIndex]))
  );
};
