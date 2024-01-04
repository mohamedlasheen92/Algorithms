
export function standardDesviation(list: number[]): number {

  let numerator: number = 0, standardDesviation: number = 0,
    length: number = list.length, average: number = 0, denominator: number = length;
  
  for (let i = 0; i < length; i++) {
    average += list[i];
  }
  average /= length;
  for (let i = 0; i < length; i++) {
    numerator += Math.pow(list[i] - average, 2);
  }
  standardDesviation = Math.sqrt(numerator / denominator);

  return standardDesviation;
}
