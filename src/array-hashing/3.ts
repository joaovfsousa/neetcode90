export function twoSum(nums: number[], target: number): [number, number] {
  for (let indexX = 0; indexX < nums.length; indexX++) {
    for (let indexY = 0; indexY < nums.length; indexY++) {
      if (indexX === indexY) {
        continue;
      }

      const numX = nums[indexX];
      const numY = nums[indexY];

      if (numX + numY === target) {
        return [indexX, indexY];
      }
    }
  }
  throw new Error("Not pair found");
}
