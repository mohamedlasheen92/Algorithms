// export default function mergeSort(
//   array: number[],
//   start: number,
//   end: number
// ): void {
//   if (end <= start) return;

//   let midpoint: number = Math.floor((start + end) / 2);

//   mergeSort(array, start, midpoint);
//   mergeSort(array, midpoint + 1, end);
//   merge(array, start, midpoint, end);

// }

// function merge(array: number[], start: number, midpoint: number, end: number) {
//   let i: number, j: number, k: number;

//   let left_len = midpoint - start + 1;
//   let right_len = end - midpoint;

//   let left_array = [];
//   let right_array = [];

//   // Fill Two Arrays
//   for (i = 0; i < left_len; i++) {
//     left_array[i] = array[start + i];
//   }
//   for (j = 0; j < right_len; j++) {
//     right_array[j] = array[midpoint + 1 + j];
//   }
//   i = 0;
//   j = 0;
//   k = start;

//   // Comparision
//   while (i < left_len && j < right_len) {
//     if (left_array[i] <= right_array[j]) {
//       array[k] = left_array[i];
//       i++;
//     } else {
//       array[k] = right_array[j];
//       j++;
//     }
//     k++;
//   }
//   // Remove remain items
//   while (i < left_len) {
//     array[k] = left_array[i];
//     i++;
//     k++;
//   }
//   while (j < right_len) {
//     array[k] = right_array[j];
//     j++;
//     k++;
//   }
// }

export default function mergeSort(array: number[]) : number[] {

  if (array.length < 2) return array;

  const midpoint: number = Math.floor(array.length / 2);

  const leftArray = array.slice(0, midpoint);
  const rightArray = array.slice(midpoint);
  
  return merge( mergeSort(leftArray), mergeSort(rightArray) );
}
function merge(leftArray: number[], rightArray: number[]): number[] {

  let result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(leftArray.slice(leftIndex), rightArray.slice(rightIndex));
}



// export default function mergeSort(array: number[]) : number[] {
//   if (array.length < 2) return array;

//   const midpoint: number = Math.floor(array.length / 2);

//   const leftArray = array.slice(0, midpoint);
//   const rightArray = array.slice(midpoint);

//   return merge(mergeSort(leftArray), mergeSort(rightArray));
// }
// function merge(leftArray: number[], rightArray: number[]): number[] {

//   const result: number[] = [];
//   let leftIndex = 0;
//   let rightIndex = 0;
  
//   while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
//     if (leftArray[leftIndex] <= rightArray[rightIndex]) {
//       result.push(leftArray[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(rightArray[rightIndex]);
//       rightIndex++;
//     }
//   }
//   // console.log(leftArray);
//   // console.log(rightArray);
  

//   // return [...result, ...leftArray, ...rightArray];
//   return result.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex))
// }
