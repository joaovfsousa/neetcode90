import { twoSum } from "./3";

describe("two sum", () => {
  it.each([
    [[2, 7, 11, 15], 9, [0, 1]],
    [[3, 2, 4], 6, [1, 2]],
    [[3, 3], 6, [0, 1]],
  ])("it should return the correct output", (nums, target, expectedResult) => {
    expect(twoSum(nums, target)).toMatchObject(expectedResult);
  });
});
