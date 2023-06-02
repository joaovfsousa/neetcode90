function orderChars(str: string) {
  return str.split("").sort().join("");
}

export function groupAnagrams(strs: string[]): string[][] {
  const orderedLettersMap = new Map<string, string[]>();

  for (const str of strs) {
    const orderedChars = orderChars(str);
    const existingArray = orderedLettersMap.get(orderedChars);
    if (existingArray) {
      existingArray.push(str);
    } else {
      orderedLettersMap.set(orderedChars, [str]);
    }
  }

  return Array.from(orderedLettersMap.values());
}
