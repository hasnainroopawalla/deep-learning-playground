import { Vector2D } from "../../vectorTs";

export abstract class Layer {
  // Number of inputs (same as outputSize of previous layer)
  protected inputSize: number;
  // Number of outputs (same as number of nodes in the layer)
  protected outputSize: number;

  constructor(inputSize: number, outputSize: number) {
    this.inputSize = inputSize;
    this.outputSize = outputSize;
  }

  public initializeParams() {}

  public abstract forward(_inputData: Vector2D): Vector2D;

  public backward() {}
}
