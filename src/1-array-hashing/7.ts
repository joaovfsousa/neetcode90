// Time = O(n^2) space = O(n)
function containsDuplicate(arr: string[]): boolean {
  const set = new Set<string>();
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (set.has(element) && element !== ".") {
      return true;
    }
    set.add(element);
  }
  return false;
}

function isValidRow(row: string[]) {
  return !containsDuplicate(row);
}

export function isValidSudoku(board: string[][]): boolean {
  for (let index = 0; index < board.length; index++) {
    const row = board[index];
    if (!isValidRow(row)) return false;
  }

  for (let colIndex = 0; colIndex < board.length; colIndex++) {
    const set = new Set<string>();

    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
      const element = board[rowIndex][colIndex];
      if (set.has(element) && element !== ".") {
        return false;
      }
      set.add(element);
    }
  }

  const squareRanges = [
    [0, 3],
    [3, 6],
    [6, 9],
  ];
  for (const rowRange of squareRanges) {
    for (const colRange of squareRanges) {
      const set = new Set<string>();

      for (let rowIndex = rowRange[0]; rowIndex < rowRange[1]; rowIndex++) {
        for (let colIndex = colRange[0]; colIndex < colRange[1]; colIndex++) {
          const element = board[rowIndex][colIndex];
          if (set.has(element) && element !== ".") {
            return false;
          }
          set.add(element);
        }
      }
    }
  }

  return true;
}
