import { topKFrequent } from "./5";

describe("Top K Frequent Elements", () => {
  it.each([
    [[1, 1, 1, 2, 2, 3], 2, [1, 2]],
    [[1], 1, [1]],
    [[1, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4], 3, [1, 3, 4]],
  ])("it should return the correct output", (nums, k, expectedResult) => {
    expect(topKFrequent(nums, k).sort()).toMatchObject(expectedResult);
  });
});
