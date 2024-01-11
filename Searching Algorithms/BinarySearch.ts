function binarySearch(list: number[], key: number): number {

  let low: number = 0;
  let high: number = list.length - 1;
  
  let mid: number;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    
    if (key === list[mid]) return mid;
    else if (key > list[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

export default binarySearch;