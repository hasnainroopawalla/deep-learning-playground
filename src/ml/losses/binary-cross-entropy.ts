import { Vector2D, vectorTs } from "../../vectorTs";

export class BinaryCrossEntropy {
  constructor() {}

  public objective(actual: Vector2D, predicted: Vector2D) {
    const term0 = actual.sub(1);
    console.log(term0);
  }
}
