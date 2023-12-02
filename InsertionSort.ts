function insertionSort(arr: number[]): number[] {

  let key: number, j = 0;

  for (let i = 1; i < arr.length; i++) {
    key = arr[i];

    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}



export default insertionSort;


