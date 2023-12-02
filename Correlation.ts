export default function correlation(arrX: number[], arrY: number[]) : number {

  let meanX: number = 0, meanY: number = 0, leftSummetion: number = 0, rightSummetion: number = 0, arrLen: number = arrX.length;
  let numerator: number = 0, denominator: number = 0, correlation: number = 0;

  for (let i = 0; i < arrLen; i++) {
    meanX += arrX[i];
    meanY += arrY[i];
  }
  meanX /= arrLen;
  meanY /= arrLen;

  for (let i = 0; i < arrLen; i++) {
    numerator += (arrX[i] - meanX) * (arrY[i] - meanY);
    leftSummetion += Math.pow(arrX[i] - meanX, 2);
    rightSummetion += Math.pow(arrY[i] - meanY, 2);
  }
  denominator = Math.sqrt(leftSummetion * rightSummetion);
  correlation = numerator / denominator;
  return correlation;
}