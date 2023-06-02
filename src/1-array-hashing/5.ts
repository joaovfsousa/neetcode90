export function topKFrequent(nums: number[], k: number): number[] {
  const numCountMap = new Map<number, number>();
  for (const num of nums) {
    const existingCount = numCountMap.get(num);
    if (existingCount) {
      numCountMap.set(num, existingCount + 1);
    } else {
      numCountMap.set(num, 1);
    }
  }

  return Array.from(numCountMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((numAndCount) => numAndCount[0]);
}
