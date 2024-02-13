import { Layer } from "../layers";

const numEpochs = 10;

export class Sequential {
  private layers: Layer[];

  constructor() {
    this.layers = [];
  }

  public summary(): void {}

  public add(layer: Layer): void {
    this.layers.push(layer);
  }

  private forward() {
    // let previousLayerOutput = X;
  }

  private backward() {}

  public fit(): void {
    for (let i = 1; i < numEpochs + 1; i++) {
      this.forward();
      this.backward();
    }
  }
}
