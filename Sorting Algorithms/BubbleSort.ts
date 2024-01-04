function swap(arr: number[], idxOne: number, idxTwo: number): void {
  let temp = arr[idxOne];
  arr[idxOne] = arr[idxTwo];
  arr[idxTwo] = temp;
}

export default function bubbleSort(arr: number[]): number[] {
  let arrLen: number = arr.length, check: boolean = true;

  for (let i = 0; i < arrLen - 1; i++) {

    check = true;
    for (let j = 0; j < arrLen - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        check = false;
      }
    }
    if (check) break;
  }
  

  return arr;
}
