function swap(arr: number[], idxOne: number, idxTwo: number): void {
  let temp = arr[idxOne];
  arr[idxOne] = arr[idxTwo];
  arr[idxTwo] = temp;
}
function selectionSort(arr: number[]): number[] {

  let minIdx: number, count: number = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    swap(arr, minIdx, i);
    ++count;
    if (count == 2) break;
  }

  return arr;
}

export default selectionSort;