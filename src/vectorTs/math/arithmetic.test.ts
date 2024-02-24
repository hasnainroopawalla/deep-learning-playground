import { arrayToVector2D } from "../adapters";
import { vectorsStrictEqual } from "../test-utils";
import { multiply, negative, sub } from "./arithmetic";

describe("operations", () => {
  describe("sub", () => {
    test("1 - 3x2", () => {
      const vector = arrayToVector2D([
        [1, 2],
        [3, 4],
        [5, 6],
      ]);
      const result = arrayToVector2D([
        [0, -1],
        [-2, -3],
        [-4, -5],
      ]);

      vectorsStrictEqual(sub(1, vector), result);
    });

    test("4 - 1x2", () => {
      const vector = arrayToVector2D([[3, 18]]);
      const result = arrayToVector2D([[1, -14]]);

      vectorsStrictEqual(sub(4, vector), result);
    });

    test("2x2 - 2x2", () => {
      const vector1 = arrayToVector2D([
        [2, 1],
        [4, -5],
      ]);
      const vector2 = arrayToVector2D([
        [-1, 4],
        [3, 2],
      ]);
      const result = arrayToVector2D([
        [3, -3],
        [1, -7],
      ]);

      vectorsStrictEqual(sub(vector1, vector2), result);
    });

    test("2x1 - 3", () => {
      const vector1 = arrayToVector2D([[2], [4]]);
      const result = arrayToVector2D([[-1], [1]]);

      vectorsStrictEqual(sub(vector1, 3), result);
    });

    test("2x1 - 3", () => {
      expect(() => sub(2, 3).data).toThrow();
    });
  });

  describe("multiply", () => {
    test("1 - 3x2", () => {
      const vector = arrayToVector2D([
        [1, 2],
        [3, 4],
        [5, 6],
      ]);
      const result = arrayToVector2D([
        [1, 2],
        [3, 4],
        [5, 6],
      ]);

      vectorsStrictEqual(multiply(1, vector), result);
    });

    test("4 - 1x2", () => {
      const vector = arrayToVector2D([[3, 18]]);
      const result = arrayToVector2D([[12, 72]]);

      vectorsStrictEqual(multiply(4, vector), result);
    });

    test("2x2 - 2x2", () => {
      const vector1 = arrayToVector2D([
        [2, 1],
        [4, -5],
      ]);
      const vector2 = arrayToVector2D([
        [-1, 4],
        [3, 2],
      ]);
      const result = arrayToVector2D([
        [-2, 4],
        [12, -10],
      ]);

      vectorsStrictEqual(multiply(vector1, vector2), result);
    });

    test("2x1 - 3", () => {
      const vector1 = arrayToVector2D([[2], [4]]);
      const result = arrayToVector2D([[6], [12]]);

      vectorsStrictEqual(multiply(vector1, 3), result);
    });

    test("2x1 - 3", () => {
      expect(() => multiply(2, 3).data).toThrow();
    });
  });

  describe("negative", () => {
    test("3x2", () => {
      const vector = arrayToVector2D([
        [1, 2],
        [3, -4],
        [-5, 6],
      ]);
      const result = arrayToVector2D([
        [-1, -2],
        [-3, 4],
        [5, -6],
      ]);

      vectorsStrictEqual(negative(vector), result);
    });

    test("1x2", () => {
      const vector = arrayToVector2D([[-3, 18]]);
      const result = arrayToVector2D([[3, -18]]);

      vectorsStrictEqual(negative(vector), result);
    });
  });
});
