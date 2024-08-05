const labels = ["1", "2", "3", "4", "5", "6"];

const graph = [
  [0, 6.7, 5.2, 2.8, 5.6, 3.6],
  [6.7, 0, 5.7, 7.3, 5.1, 3.2],
  [5.2, 5.7, 0, 3.4, 8.5, 4.0],
  [2.8, 7.3, 3.4, 0, 8, 4.4],
  [5.6, 5.1, 8.5, 8, 0, 4.6],
  [3.6, 3.2, 4, 4.4, 4.6, 0],
];
const v = labels.length   //6m
let selectedEdgesCount = 0
let selected: boolean[] = Array(v).fill(false)
selected[0] = true

let i: number, j: number;
while (selectedEdgesCount < v - 1) {

  let min = Number.MAX_SAFE_INTEGER
  let from: number = -1, to: number = -1

  for (i = 0; i < v; i++) {
    if (selected[i]) {

      for (j = 0; j < v; j++) {

        if (graph[i][j] > 0 && selected[j] === false && graph[i][j] < min) {
          min = graph[i][j]
          from = i
          to = j
        }
      }
    }
  }
  selected[to] = true
  ++selectedEdgesCount
  console.log(`${labels[from]} -> ${labels[to]} : ${graph[from][to]}`);
}


