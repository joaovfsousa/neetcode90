// space complexity = O(n)
// time complexity = O(n^2)
//
// export function twoSum(nums: number[], target: number): [number, number] {
//   for (let indexX = 0; indexX < nums.length; indexX++) {
//     for (let indexY = 0; indexY < nums.length; indexY++) {
//       if (indexX === indexY) {
//         continue;
//       }

//       const numX = nums[indexX];
//       const numY = nums[indexY];

//       if (numX + numY === target) {
//         return [indexX, indexY];
//       }
//     }
//   }
//   throw new Error("Not pair found");
// }

// space complexity = O(2n)
// time complexity = O(n)
export function twoSum(nums: number[], target: number): [number, number] {
  const valueToIndexMap = new Map<number, number>();
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const targetDiff = target - num;
    if (valueToIndexMap.has(targetDiff)) {
      return [valueToIndexMap.get(targetDiff)!, index];
    } else {
      valueToIndexMap.set(num, index);
    }
  }
  throw new Error("Not pair found");
}
