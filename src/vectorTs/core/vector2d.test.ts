import { Vector2D } from "./vector2d";

describe("Vector2D", () => {
  describe("create", () => {
    test("2x3 vector", () => {
      const vector = new Vector2D([
        [1, 2, 3],
        [4, 5, 6],
      ]);
      expect(vector.data).toStrictEqual([
        [1, 2, 3],
        [4, 5, 6],
      ]);
    });

    test("4x1 vector", () => {
      const vector = new Vector2D([[1, 2, 3, 4]]);
      expect(vector.data).toStrictEqual([[1, 2, 3, 4]]);
    });

    test("1x3 vector", () => {
      const vector = new Vector2D([[1], [2], [3]]);
      expect(vector.data).toStrictEqual([[1], [2], [3]]);
    });
  });

  describe("shape", () => {
    test("4x2 vector", () => {
      const vector = new Vector2D([
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
      ]);
      expect(vector.shape).toStrictEqual([4, 2]);
    });

    test("1x3 vector", () => {
      const vector = new Vector2D([[1, 2, 3]]);
      expect(vector.shape).toStrictEqual([1, 3]);
    });
  });

  describe("dot", () => {
    test("2x3 vector . 3x2 vector", () => {
      const vector1 = new Vector2D([
        [1, 2, 3],
        [4, 5, 6],
      ]);
      const vector2 = new Vector2D([
        [7, 8],
        [9, 10],
        [11, 12],
      ]);
      const result = vector1.dot(vector2);

      expect(result.data).toStrictEqual([
        [58, 64],
        [139, 154],
      ]);
    });

    test("2x1 vector . 1x2 vector", () => {
      const vector1 = new Vector2D([[2], [3]]);
      const vector2 = new Vector2D([[4, 5]]);
      const result = vector1.dot(vector2);

      expect(result.data).toStrictEqual([
        [8, 10],
        [12, 15],
      ]);
    });
  });
});
