import { Vector1D, Vector2D, vectorTs } from "../../vectorTs";
import { Layer } from "./base-layer";

export class Dense extends Layer {
  private layerInput: Vector2D;
  private weights: Vector2D;
  private bias: Vector1D;

  constructor(inputSize: number, outputSize: number) {
    super(inputSize, outputSize);
  }

  public initializeParams(): void {
    this.weights = vectorTs.random.xavier(this.inputSize, this.outputSize);
    this.bias = vectorTs.zeros1D(5);
  }

  public forward(input: Vector2D): Vector2D {
    this.layerInput = input;
    return input.dot(this.weights); // TODO: add bias
  }

  public backward(): Vector2D {
    // const oldWeights = this.weights;
    // const dw = this.layerInput.dot(backwardInput);
  }
}
