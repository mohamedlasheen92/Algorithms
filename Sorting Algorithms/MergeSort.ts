export default function mergeSort(array: number[]) : number[] {
  if (array.length < 2) return array;

  const midpoint: number = Math.floor(array.length / 2);

  const leftArray = array.slice(0, midpoint);
  const rightArray = array.slice(midpoint);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}
function merge(leftArray: number[], rightArray: number[]): number[] {

  const result: number[] = [];
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

  return result.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex))
}
