import { longestConsecutive } from "./9";

describe("Longest consecutive sequence", () => {
  it.each([
    [[100, 4, 200, 1, 3, 2], 4],
    [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1], 9],
    [
      [4, 0, -4, -2, 2, 5, 2, 0, -8, -8, -8, -8, -1, 7, 4, 5, 5, -4, 6, 6, -3],
      5,
    ],
  ])("it should return the correct output", (nums, expectedResult) => {
    expect(longestConsecutive(nums)).toBe(expectedResult);
  });
});
