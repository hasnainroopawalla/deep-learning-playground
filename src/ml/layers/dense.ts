import { Vector1D, Vector2D, vectorTs } from "../../vectorTs";
import { SGD } from "../optimizers";
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
    console.log("input", this.weights.shape);
    this.bias = vectorTs.zeros1D(5);
  }

  public forward(input: Vector2D): Vector2D {
    this.layerInput = input;
    return input.dot(this.weights); // TODO: add bias
  }

  public backward(upstreamGradient: Vector2D): Vector2D {
    console.log("layerInput", this.layerInput.shape);

    const dw = vectorTs.transpose(this.layerInput).dot(upstreamGradient);

    console.log("dw", dw.shape);
    // const db =
    const { newWeights, newBias } = SGD.updateParameters(
      this.weights,
      this.weights,
      dw,
      dw
    );
    console.log("newWeights", newWeights.shape);
    console.log("oldWeights", this.weights.shape);

    const backward = this.layerInput.dot(vectorTs.transpose(this.weights));

    console.log("backward", backward.shape);

    this.weights = newWeights;
    return backward;
  }
}
