import { Vector1D, Vector2D } from "./core";

export const arrayToVector1D = (array: number[]) => new Vector1D(array);

export const arrayToVector2D = (array: number[][]) => new Vector2D(array);
