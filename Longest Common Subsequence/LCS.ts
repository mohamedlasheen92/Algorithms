let rowText = "OHELOD"
let columnText = "HELLOWORLD"

let lengthOfRows = rowText.length
let lengthOfColumns = columnText.length

columnText = " " + columnText
rowText = " " + rowText

let dp: number[][] = []
let i: number, j: number = 0;
for ( i = 0; i <= lengthOfRows; i++) {

  dp[i] = []

  for ( j = 0; j <= lengthOfColumns; j++) {
    if (i === 0 || j === 0) dp[i][j] = 0

    else if (rowText[i] === columnText[j]) dp[i][j] = 1 + dp[i - 1][j - 1]

    else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);

  }
}

for (let k = 0; k < lengthOfRows + 1; k++) {
  console.log(dp[k].join("  "));
}
console.log(`The Length of LCS is ${dp[lengthOfRows][lengthOfColumns]}`);

/**
 * Start from bottom right
 * if currentValue > leftValue
 * * * if currentValue == topValue
 * * * * * //the current value inherited from top
 * * * * * Move to top row
 * * * else
 * * * * * //current value is origin of match
 * * * * * add the char to the solution
 * * * * * move to the top row
 * * * * * move to the left column
 * move to left column
 */
i = lengthOfRows
j = lengthOfColumns
let lcsResult = ''

while (i > 0 && j > 0) {
  if (dp[i][j] > dp[i][j - 1]) {
    if (dp[i][j] === dp[i - 1][j]) {
      i--
    }
    else {
      lcsResult = rowText[i] + lcsResult
      i--
      j--
    }
  } else {
    j--
  }
}
console.log(lcsResult)