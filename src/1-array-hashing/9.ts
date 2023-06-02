// Time = O(n log n) Space = O(n)
export function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;

  nums.sort((a, b) => a - b);

  let prev = nums[0];

  let longest = 1;
  let tempLength = 1;

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    if (num === prev) continue;
    if (num === prev + 1) tempLength++;
    else tempLength = 1;

    prev = num;

    longest = tempLength > longest ? tempLength : longest;
  }

  return longest;
}

// Time = O(n) Space = O(2n)
// export function longestConsecutive(nums: number[]): number {
//   const set = new Set(nums);

//   let longest = 0;

//   for (const num of nums) {
//     let length = 0;
//     if (set.has(num - 1)) continue;
//     while (set.has(num + length)) {
//       length++;
//     }

//     longest = length > longest ? length : longest;
//   }

//   return longest;
// }
