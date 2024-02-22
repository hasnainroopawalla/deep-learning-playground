import { vectorTs } from "../../vectorTs";
import { BinaryCrossEntropy } from "./binary-cross-entropy";

describe("BinaryCrossEntropy", () => {
  describe("objective", () => {
    test("basic", () => {
      //   const actual = vectorTs.create2D([[1], [1], [1]]);
      //   const predicted = vectorTs.create2D([[1], [1], [0]]);

      const actual = vectorTs.create2D([[1], [1], [1]]);
      const predicted = vectorTs.create2D([[1], [1], [0]]);

      new BinaryCrossEntropy().objective(actual, predicted);
    });
  });
});
