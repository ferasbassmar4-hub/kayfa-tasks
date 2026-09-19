function analyzeRange(start, end) {
  if (start > end) {
    return "Invalid range";
  }

  let evenCount = 0;
  let oddCount = 0;
  let evenSum = 0;
  let totalSum = 0;

  for (let i = start; i <= end; i++) {
    totalSum += i;

    if (i % 2 === 0) {
      evenCount++;
      evenSum += i;
    } else {
      oddCount++;
    }
  }

  return `Range Analysis (${start} to ${end}):
- Total Numbers: ${end - start + 1}
- Even Numbers Count: ${evenCount}
- Odd Numbers Count: ${oddCount}
- Even Numbers Sum: ${evenSum}
- Total Sum: ${totalSum}`;
}

function countMultiples(start, end, divisor) {
  if (start > end || divisor === 0) {
    return 0;
  }

  let count = 0;
  for (let i = start; i <= end; i++) {
    if (i % divisor === 0) {
      count++;
    }
  }

  return count;
}

const summaryResult = analyzeRange(1, 10);
console.log(summaryResult);

const multiplesCount = countMultiples(1, 20, 3);
console.log(multiplesCount);