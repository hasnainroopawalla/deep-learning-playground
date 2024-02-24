import { vectorTs } from "../../vectorTs";
import { arrayToVector2D } from "../../vectorTs/adapters";
import { vectorsStrictEqual } from "../../vectorTs/test-utils";
import { BinaryCrossEntropy } from "./binary-cross-entropy";

describe("BinaryCrossEntropy", () => {
  describe("objective", () => {
    test("1/3 predictions incorrect", () => {
      const actual = vectorTs.create2D([[1], [1], [1]]);
      const predicted = vectorTs.create2D([[1], [1], [0]]);

      const result = arrayToVector2D([[5.141649490132791]]);
      vectorsStrictEqual(
        new BinaryCrossEntropy().objective(actual, predicted),
        result
      );
    });

    test("all predictions correct", () => {
      const actual = vectorTs.create2D([[0], [1], [0], [1]]);
      const predicted = vectorTs.create2D([[0], [1], [0], [1]]);

      const result = arrayToVector2D([[0]]);
      vectorsStrictEqual(
        new BinaryCrossEntropy().objective(actual, predicted),
        result
      );
    });
  });
});
