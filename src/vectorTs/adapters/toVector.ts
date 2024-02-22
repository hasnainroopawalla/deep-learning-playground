import { Vector1D, Vector2D } from "../core";

export const arrayToVector1D = (array: number[]) => new Vector1D(array);

export const arrayToVector2D = (array: number[][]) => new Vector2D(array);

export const numberToVector2D = (
  num: number,
  numRows: number,
  numCols: number
) =>
  arrayToVector2D(
    Array.from({ length: numRows }, () =>
      Array.from({ length: numCols }, () => num)
    )
  );
