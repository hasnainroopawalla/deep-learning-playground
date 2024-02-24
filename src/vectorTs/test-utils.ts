import type { Vector2D } from "./core";

export const floatValueApproxEqual = (received: number, expected: number) =>
  expect(received).toBeCloseTo(expected, 8);

export const vectorsStrictEqual = (vector1: Vector2D, vector2: Vector2D) => {
  const [numRows1, numCols1] = vector1.shape;
  const [numRows2, numCols2] = vector2.shape;

  expect(numRows1).toBe(numRows2);
  expect(numCols1).toBe(numCols2);

  for (let i = 0; i < numRows1; i++) {
    for (let j = 0; j < numCols1; j++) {
      const [v1, v2] = [vector1.data[i][j], vector2.data[i][j]];

      if (isNaN(v1)) {
        expect(v2).toBeNaN();
      } else {
        floatValueApproxEqual(v1, v2);
      }
    }
  }
};
