import { numberToVector2D } from "../adapters";
import { type Vector2D } from "../core";

// TODO: simplify this
export const maybeVectorsToVectors = (
  v1: number | Vector2D,
  v2: number | Vector2D
) => {
  let vector1: Vector2D;
  let vector2: Vector2D;

  if (typeof v1 === "number") {
    if (typeof v2 === "number") {
      throw new Error("Neither of the arguments is a Vector");
    } else {
      vector1 = numberToVector2D(v1, v2.shape[0], v2.shape[1]);
    }
  } else {
    vector1 = v1;
  }

  if (typeof v2 === "number") {
    if (typeof v1 === "number") {
      throw new Error("Neither of the arguments is a Vector");
    } else {
      vector2 = numberToVector2D(v2, v1.shape[0], v1.shape[1]);
    }
  } else {
    vector2 = v2;
  }
  return [vector1, vector2];
};
