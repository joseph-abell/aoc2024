const star1 = (firstSet, secondSet) => firstSet.reduce((firstNum, acc, index) => {
    const secondNum = secondSet[index];

    return (firstNum < secondNum) ? acc + (secondNum - firstNum) : acc + (firstNum - secondNum);
}, 0);

const star2 = (firstSet, secondSet) => firstSet
    .map((firstNum) => firstNum * secondSet.filter(i => i === firstNum).length)
    .reduce((acc, curr) => acc + curr, 0);

const day01 = (lines) => {
    const numbers = lines.map(line => line.split('  ').map(Number));
    const firstSet = numbers.map((num, i) => num[0]).sort((a, b) => a - b);
    const secondSet = numbers.map((num, i) => num[1]).sort((a, b) => a - b);

    const result1 = star1(firstSet, secondSet);
    const result2 = star2(firstSet, secondSet);
    console.log({ result1, result2 });
}

export default day01;
