function ActivitySelectionProblem(start: number[], end: number[]): number[] {
  let result: number[] = [0];
  let endIdx: number = 0;
  for (let startIdx = 1; startIdx < start.length; startIdx++) {

    if (start[startIdx] >= end[endIdx]) {
      result.push(startIdx);
      endIdx = startIdx;
    }
  }

  return result;
}

export default ActivitySelectionProblem;

