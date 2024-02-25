import { arrayToVector2D } from "../../vectorTs/adapters";
import { vectorsStrictEqual } from "../../vectorTs/test-utils";
import { Sigmoid } from "./activation";

describe("sigmoid", () => {
  test("3x2", () => {
    const vector = arrayToVector2D([
      [1, 2],
      [3, -4],
      [-5, 6],
    ]);
    const resultForward = arrayToVector2D([
      [0.73105858, 0.88079708],
      [0.95257413, 0.01798621],
      [0.00669285, 0.99752738],
    ]);

    const resultBackward = arrayToVector2D([
      [0.19661193, 0.10499359],
      [0.04517666, 0.01766271],
      [0.00664806, 0.00246651],
    ]);

    const sigmoid = new Sigmoid();
    vectorsStrictEqual(sigmoid.forward(vector), resultForward);
    vectorsStrictEqual(sigmoid.backward(vector), resultBackward);
  });

  test("1x2", () => {
    const vector = arrayToVector2D([[3, -2]]);
    const resultForward = arrayToVector2D([[0.95257413, 0.11920292]]);
    const resultBackward = arrayToVector2D([[0.04517666, 0.10499359]]);

    const sigmoid = new Sigmoid();
    vectorsStrictEqual(sigmoid.forward(vector), resultForward);
    vectorsStrictEqual(sigmoid.backward(vector), resultBackward);
  });
});
