import { isAnagram } from "./2";

describe("is anagram", () => {
  it.each([
    ["ana", "naaa"],
    ["arara", "rartaa"],
  ])("it should return false when word is not a anagram", (s, t) => {
    expect(isAnagram(s, t)).toBe(false);
  });

  it.each([
    ["ana", "naa"],
    ["arara", "raraa"],
  ])("it should return true when word is a anagram", (s, t) => {
    expect(isAnagram(s, t)).toBe(true);
  });
});
