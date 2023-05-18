import { groupAnagrams } from "./4";

describe("group anagrams", () => {
  it.each([
    [
      ["eat", "tea", "tan", "ate", "nat", "bat"],
      [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    ],
    [[""], [[""]]],
    [["a"], [["a"]]],
  ])("it should return the correct output", (strs, expectedResult) => {
    expect(groupAnagrams(strs).map((arr) => arr.sort())).toEqual(
      expect.arrayContaining(expectedResult)
    );
  });
});
