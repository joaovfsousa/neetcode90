const _a = "a".charCodeAt(0);
const _z = "z".charCodeAt(0);
const _0 = "0".charCodeAt(0);
const _9 = "9".charCodeAt(0);
function isAlphaNumeric(c: string) {
  const charCode = c.charCodeAt(0);

  const isAlphabetic = charCode >= _a && charCode <= _z;
  const isNumeric = charCode >= _0 && charCode <= _9;

  return isAlphabetic || isNumeric;
}

export function isPalindrome(s: string): boolean {
  let lPointer = 0;
  let rPointer = s.length - 1;

  while (lPointer < rPointer) {
    let lChar = s.charAt(lPointer).toLowerCase();
    while (!isAlphaNumeric(lChar) && lPointer < rPointer) {
      lPointer++;
      lChar = s.charAt(lPointer).toLowerCase();
    }

    let rChar = s.charAt(rPointer).toLowerCase();
    while (!isAlphaNumeric(rChar) && lPointer < rPointer) {
      rPointer--;
      rChar = s.charAt(rPointer).toLowerCase();
    }

    if (lChar !== rChar) {
      return false;
    }
    lPointer++;
    rPointer--;
  }
  return true;
}
