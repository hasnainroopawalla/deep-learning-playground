import { vectorTs } from "../../vectorTs";
import {
  floatValueApproxEqual,
  vectorsStrictEqual,
} from "../../vectorTs/test-utils";
import { BinaryCrossEntropy } from "./binary-cross-entropy";

describe("BinaryCrossEntropy", () => {
  describe("objective", () => {
    test("1/3 predictions incorrect", () => {
      const actual = vectorTs.create2D([[1], [1], [1]]);
      const predicted = vectorTs.create2D([[1], [1], [0]]);

      const bce = new BinaryCrossEntropy();

      const expectedCost = 1.319670555596391;
      const expectedGradient = vectorTs.create2D([
        [-0.26894142],
        [-0.26894142],
        [-0.5],
      ]);

      floatValueApproxEqual(bce.objective(actual, predicted), expectedCost);

      vectorsStrictEqual(bce.gradient(actual, predicted), expectedGradient);
    });

    test("all predictions correct", () => {
      const actual = vectorTs.create2D([[0], [1], [0], [1]]);
      const predicted = vectorTs.create2D([[0], [1], [0], [1]]);

      const bce = new BinaryCrossEntropy();

      const expectedCost = 2.0128177361563364;
      const expectedGradient = vectorTs.create2D([
        [0.5],
        [-0.26894142],
        [0.5],
        [-0.26894142],
      ]);

      floatValueApproxEqual(
        new BinaryCrossEntropy().objective(actual, predicted),
        expectedCost
      );

      vectorsStrictEqual(bce.gradient(actual, predicted), expectedGradient);
    });
  });
});
