import { isPalindrome } from "./1";

describe("Is palindrome", () => {
  it.each([
    ["A man, a plan, a canal: Panama", true],
    ["race a car", false],
    ["", true],
  ])("it should return the correct output", (input, expectedResult) => {
    expect(isPalindrome(input)).toBe(expectedResult);
  });
});
