function segregate(arr: number[]): number[] {
  if (arr.length < 2) return arr;

  let midpoint: number = Math.floor((arr.length) / 2);
  let leftArray = arr.slice(0, midpoint);
  let rightArray = arr.slice(midpoint);

  return merge(segregate(leftArray), segregate(rightArray));
}
function merge(leftArray: number[], rightArray: number[]) : number[] {
  let leftIndex: number = 0, rightIndex: number = 0;
  let result: number[] = [];

  while (leftIndex < leftArray.length && leftArray[leftIndex] < 0) {
    result.push(leftArray[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < rightArray.length && rightArray[rightIndex] < 0) {
    result.push(rightArray[rightIndex]);
    rightIndex++;
  }
  return result.concat(leftArray.slice(leftIndex), rightArray.slice(rightIndex));
}
export default segregate;