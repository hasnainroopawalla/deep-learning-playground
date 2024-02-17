import { vectorTs, type Vector2D } from "../../vectorTs";
import { Layer } from "./base-layer";

export class Dense extends Layer {
  // private weights: Vector2D;

  constructor(inputSize: number, outputSize: number) {
    super(inputSize, outputSize);
  }

  public initializeParams(): void {
    // Xavier Weight Initialization
    const weights = vectorTs.random.xavier(this.inputSize, this.outputSize);
    console.log(weights);
  }
}
