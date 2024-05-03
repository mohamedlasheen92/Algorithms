class CharFreq {

  ASCIIMethod(message: string) : void {

    let frequencies: number[] = new Array(127).fill(0);

    for (let i = 0; i < message.length; i++) {
      let charCode: number = message[i].charCodeAt(0);
      frequencies[charCode]++;
    }

    for (let i = 0; i < frequencies.length; i++) {
      if (frequencies[i] > 0) {

        let char: string = String.fromCharCode(i);
        console.log(`${char}: ${frequencies[i]}`);
        
      }
    }

  }

  AnyCodeMethod(message: string): void {
    let freq: {[key: string] : number} = {};

    for (let i = 0; i < message.length; i++) {
      if (freq[message[i]] == undefined) {
        freq[message[i]] = 1;
      } else {
        freq[message[i]]++;
      }
    }
    for (const key in freq) {
      console.log(`${key}: ${freq[key]}`);
    }

    const freqArray: [string, number][] = this.SortHash(freq);
    const sortedData: [string, number][] = this.mergeSort(freqArray);
    console.log(sortedData);

  }

  // Convert hashtable to multidimensional array
  SortHash(hashTable: { [key: string]: number }): [string, number][] {
    
    let freqArray: [string, number][] = Array.from({ length: Object.keys(hashTable).length }, () => ['', 0] as [string, number]);

    let i = 0;
    for (const key in hashTable) {
      freqArray[i][0] = key;
      freqArray[i][1] = hashTable[key];
      i++;
    }
    return freqArray;
  }
  
  mergeSort(array: [string, number][]) : [string, number][] {

    if (array.length < 2) return array;

    const midpoint : number = Math.floor(array.length / 2);
    const left: [string, number][] = array.slice(0, midpoint);
    const right: [string, number][] = array.slice(midpoint);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }
  merge(left: [string, number][], right: [string, number][]): [string, number][] {
    
    let leftIndex: number = 0, rightIndex: number = 0;
    let result: [string, number][] = [];

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex][1] <= right[rightIndex][1]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  

}




export default CharFreq;