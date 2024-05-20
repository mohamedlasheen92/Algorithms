let labels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
let data = [
  [0, 2, 4, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 7, 4, 6, 0, 0, 0],
  [0, 0, 0, 0, 3, 2, 4, 0, 0, 0],
  [0, 0, 0, 0, 4, 1, 5, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 4, 0],
  [0, 0, 0, 0, 0, 0, 0, 6, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const n = labels.length
const states: {from: string, to: string, cost: number}[] = []
states[n - 1] = { from: "", to: "", cost: 0 }

let j = n - 1, newCost = 0;
for (let i = n - 2; i >= 0; i--) {
  states[i] = { from: labels[i], to: labels[j], cost: Number.MAX_SAFE_INTEGER }
  
  for (j = i + 1; j < n; j++) {
    if (data[i][j] === 0) continue

    newCost = data[i][j] + states[j].cost

    if (newCost < states[i].cost) {
      states[i].to = labels[j]
      states[i].cost = newCost
    }
  }
}

console.log(states)

console.log(`Minimim Cost: ${states[0].cost}`);

let path = ['A']
let i = 0, k = 0
for (i = 0; i < states.length; i++) {
  if (states[i].from === path[k]) {

    path[k + 1] = states[i].to

    k++

  }

}

console.log(path);