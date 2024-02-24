import { arrayToVector2D } from "../adapters";
import { vectorsStrictEqual } from "../test-utils";
import { clip, log } from "./operations";

describe("operations", () => {
  describe("log", () => {
    test("3x1", () => {
      const vector = arrayToVector2D([[1], [1], [0]]);
      const result = arrayToVector2D([[0], [0], [-Infinity]]);
      vectorsStrictEqual(log(vector), result);
    });

    test("2x3", () => {
      const vector = arrayToVector2D([
        [3, 6, 2],
        [-2, -5, 4],
      ]);
      const result = arrayToVector2D([
        [1.0986122886681096, 1.791759469228055, 0.6931471805599453],
        [NaN, NaN, 1.3862943611198906],
      ]);
      vectorsStrictEqual(log(vector), result);
    });
  });

  describe("clip", () => {
    test("3x2", () => {
      const vector = arrayToVector2D([
        [2, -1],
        [5, 7],
        [-4, 0],
      ]);
      const result = arrayToVector2D([
        [1, 0],
        [1, 1],
        [0, 0],
      ]);
      vectorsStrictEqual(clip(vector, 0, 1), result);
    });

    test("1x3", () => {
      const vector = arrayToVector2D([[3, 6, 2]]);
      const result = arrayToVector2D([[3, 4, 2]]);
      vectorsStrictEqual(clip(vector, 2, 4), result);
    });

    test("3x1, e-7, e+7", () => {
      const vector = arrayToVector2D([[1], [1], [0]]);
      const result = arrayToVector2D([[0.9999999], [0.9999999], [1e-7]]);
      vectorsStrictEqual(clip(vector, 1e-7, 1 - 1e-7), result);
    });
  });
});
