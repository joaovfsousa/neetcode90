// Time = O(n) Space = O(1)
export function productExceptSelf(nums: number[]): number[] {
  const result = Array<number>(nums.length).fill(1);
  let prefixProduct = 1;
  let suffixProduct = 1;

  for (let leftCursor = 0; leftCursor < nums.length; leftCursor++) {
    result[leftCursor] *= prefixProduct;
    prefixProduct *= nums[leftCursor];

    const rightCursor = nums.length - leftCursor - 1;
    result[rightCursor] *= suffixProduct;
    suffixProduct *= nums[rightCursor];
  }

  return result;
}
