import { arrayToVector2D } from "../adapters";
import { sub } from "./operations";

describe("operations", () => {
  describe("sub", () => {
    test("1 - 3x2", () => {
      const vector = arrayToVector2D([
        [1, 2],
        [3, 4],
        [5, 6],
      ]);
      expect(sub(1, vector).data).toStrictEqual([
        [0, -1],
        [-2, -3],
        [-4, -5],
      ]);
    });

    test("4 - 1x2", () => {
      const vector = arrayToVector2D([[3, 18]]);
      expect(sub(4, vector).data).toStrictEqual([[1, -14]]);
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
      expect(sub(vector1, vector2).data).toStrictEqual([
        [3, -3],
        [1, -7],
      ]);
    });

    test("2x1 - 3", () => {
      const vector1 = arrayToVector2D([[2], [4]]);
      expect(sub(vector1, 3).data).toStrictEqual([[-1], [1]]);
    });

    test("2x1 - 3", () => {
      expect(() => sub(2, 3).data).toThrow();
    });
  });
});
