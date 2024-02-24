import { vectorTs } from "../../vectorTs";
import { floatValueApproxEqual } from "../../vectorTs/test-utils";
import { BinaryCrossEntropy } from "./binary-cross-entropy";

describe("BinaryCrossEntropy", () => {
  describe("objective", () => {
    test("1/3 predictions incorrect", () => {
      const actual = vectorTs.create2D([[1], [1], [1]]);
      const predicted = vectorTs.create2D([[1], [1], [0]]);

      const result = 5.141649490132791;

      floatValueApproxEqual(
        new BinaryCrossEntropy().objective(actual, predicted),
        result
      );
    });

    test("all predictions correct", () => {
      const actual = vectorTs.create2D([[0], [1], [0], [1]]);
      const predicted = vectorTs.create2D([[0], [1], [0], [1]]);

      const result = 0;

      floatValueApproxEqual(
        new BinaryCrossEntropy().objective(actual, predicted),
        result
      );
    });
  });
});
