import { type Vector2D } from "../../vectorTs";
import { Layer } from "../layers";
import { BinaryCrossEntropy } from "../losses";

const numEpochs = 100;

export class Sequential {
  private layers: Layer[];

  constructor() {
    this.layers = [];
  }

  public summary(): void {}

  public compile(): void {
    this.layers.map((layer) => layer.initializeParams());
  }

  public add(layer: Layer): void {
    this.layers.push(layer);
  }

  private forward(inputData: Vector2D): Vector2D {
    let currentLayerOutput = inputData;
    for (let i = 0; i < this.layers.length; i++) {
      currentLayerOutput = this.layers[i].forward(currentLayerOutput);
    }
    return currentLayerOutput;
  }

  private backward(outputLabels: Vector2D, networkOutput: Vector2D) {
    let gradient = BinaryCrossEntropy.gradient(networkOutput, outputLabels);
    for (let i = this.layers.length - 1; i >= 0; i--) {
      console.log(this.layers[i]);
      gradient = this.layers[i].backward(gradient);
      console.log("gradient", gradient);
    }
  }

  public fit(inputData: Vector2D, outputLabels: Vector2D): void {
    for (let i = 1; i < numEpochs + 1; i++) {
      console.log(`---- EPOCH ${i} ----`);
      const networkOutput = this.forward(inputData);
      console.log("networkOutput", networkOutput);
      this.backward(outputLabels, networkOutput);
    }
  }
}
