// export function containsDuplicate(nums: number[]): boolean {
//   const map = new Map<number, boolean>();
//   for (let i = 0; i < nums.length; i++) {
//     const number = nums[i];
//     const existentNumber = map.get(number);
//     if (existentNumber) {
//       return true;
//     }
//     map.set(number, true);
//   }
//   return false;
// }

export function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (set.has(number)) {
      return true;
    }
    set.add(number);
  }
  return false;
}
