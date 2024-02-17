import { Vector2D } from "./vector2d";

export abstract class Vector<T> {
  data: T;

  constructor(data: T) {
    this.data = data;
  }

  // public abstract dot(_v2: Vector2D): Vector2D;

  abstract get shape(): number[];
}
