import { productExceptSelf } from "./6";

describe("Product of Array Except Self", () => {
  it.each([
    [
      [1, 2, 3, 4],
      [24, 12, 8, 6],
    ],
    [
      [-1, 1, 0, -3, 3],
      [0, 0, 9, 0, 0],
    ],
  ])("it should return the correct output", (nums, expectedResult) => {
    expect(productExceptSelf(nums)).toMatchObject(expectedResult);
  });
});
