interface IItem {
  name: string;
  weight: number;
  profit: number;
}

const items: IItem[] = [
  { name: "#1", weight: 1, profit: 4 },
  { name: "#2", weight: 3, profit: 9 },
  { name: "#3", weight: 5, profit: 12 },
  { name: "#4", weight: 4, profit: 11 }
];
const maxWeight = 8;
let dp: number[][] = []

items.splice(0, 0, { name: '#0', weight: 0, profit: 0 })

let i:number, j:number ;
for (i = 0; i < items.length; i++) {
  dp[i] = []

  for (j = 0; j <= maxWeight; j++) {

    if (i == 0 || j == 0) {
      dp[i][j] = 0
    }
    
    else if (items[i].weight <= j) {
      dp[i][j] = Math.max(
        items[i].profit + dp[i - 1][j - items[i].weight],
        dp[i - 1][j]
      )
    }
      
    else {
      dp[i][j] = dp[i - 1][j]
    }

  }
}
for (let i = 0; i < items.length; i++) {
  console.log(dp[i].join("  "));
}
console.log(`The Maximum Profit IS ${dp[items.length - 1][maxWeight]}`);

let solutions: string[] = []
i = items.length - 1
j = maxWeight
let remain = maxWeight
while (remain > 0) {
  if (dp[i][j] > dp[i - 1][j]) {
    // The item is part of the solution.
    solutions.splice(0, 0, items[i].name);
    remain -= items[i].weight
    j = remain
    i--

  } else {
    i--
  }
}
console.log(solutions);


