import { multiply } from "./utils";

describe("Multiply", () => {
  test("integer with integer", () => {
    expect(multiply(5, 4)).toBe(20);
  });
});
