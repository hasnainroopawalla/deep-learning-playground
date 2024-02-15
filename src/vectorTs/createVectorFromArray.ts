import { Vector1D, Vector2D } from "./core";

export const createVector1DFromArray = (array: number[]) => new Vector1D(array);

export const createVector2DFromArray = (array: number[][]) =>
  new Vector2D(
    array.map((subArray) => {
      return createVector1DFromArray(subArray);
    })
  );
