function stringToCharCount(s: string): Map<string, number> {
  const map = new Map<string, number>();
  s.split("").forEach((letter) => {
    const existentCount = map.get(letter);
    if (existentCount) {
      map.set(letter, existentCount + 1);
      return;
    }
    map.set(letter, 1);
  });

  return map;
}

export function isAnagram(s: string, t: string): boolean {
  const sMapAsArray = Array.from(stringToCharCount(s).entries());
  const tMap = stringToCharCount(t);

  if (sMapAsArray.length !== Array.from(tMap).length) {
    return false;
  }

  for (let i = 0; i < sMapAsArray.length; i++) {
    const [letter, count] = sMapAsArray[i];
    const letterInAnagram = tMap.get(letter);
    if (!letterInAnagram || letterInAnagram !== count) {
      return false;
    }
  }

  return true;
}
