import { Vector2D, vectorTs } from "../../vectorTs";
import { Layer } from "./base-layer";

export class Activation extends Layer {
  constructor() {
    super(0, 0);
  }

  public forward() {
    return vectorTs.create2D([[]]);
  }

  public backward(): void {}
}
