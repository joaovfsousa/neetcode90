import { containsDuplicate } from "./1";

describe("contains duplicate", () => {
  it.each([
    [1, 2, 3, 4, 5],
    [1, 2],
  ])("should return false if array doesnt contain duplicates", (...value) => {
    expect(containsDuplicate(value)).toBe(false);
  });
  it.each([
    [1, 2, 3, 4, 5, 1],
    [1, 1],
  ])("should return true if array contains duplicates", (...value) => {
    expect(containsDuplicate(value)).toBe(true);
  });
});
