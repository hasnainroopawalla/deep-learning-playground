import { arrayToVector2D } from "../adapters";
import { vectorsStrictEqual } from "../test-utils";
import { mean, sum } from "./summarize";

describe("operations", () => {
  describe("sum", () => {
    test("3x2 column", () => {
      const vector = arrayToVector2D([
        [1, 2],
        [3, 5],
        [5, 8],
      ]);
      const result = arrayToVector2D([[9, 15]]);

      vectorsStrictEqual(sum(vector, "column"), result);
    });

    test("1x3 row", () => {
      const vector = arrayToVector2D([[4, -3, 2]]);
      const result = arrayToVector2D([[3]]);

      vectorsStrictEqual(sum(vector, "row"), result);
    });

    test("1x1 row", () => {
      const vector = arrayToVector2D([[4]]);
      const result = arrayToVector2D([[4]]);

      vectorsStrictEqual(sum(vector, "row"), result);
    });
  });

  describe("mean", () => {
    test("3x2 column", () => {
      const vector = arrayToVector2D([
        [1, 2],
        [3, 5],
        [5, 8],
      ]);
      const result = arrayToVector2D([[3, 5]]);

      vectorsStrictEqual(mean(vector, "column"), result);
    });

    test("4x1 column", () => {
      const vector = arrayToVector2D([[-5], [3], [1], [2]]);
      const result = arrayToVector2D([[0.25]]);

      vectorsStrictEqual(mean(vector, "column"), result);
    });

    test("1x3 row", () => {
      const vector = arrayToVector2D([[4, -3, 2]]);
      const result = arrayToVector2D([[1]]);

      vectorsStrictEqual(mean(vector, "row"), result);
    });

    test("1x1 row", () => {
      const vector = arrayToVector2D([[4]]);
      const result = arrayToVector2D([[4]]);

      vectorsStrictEqual(mean(vector, "row"), result);
    });
  });
});
