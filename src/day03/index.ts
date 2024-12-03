const multiplyNumbersInString = (str: string): number => {
    return str
        .split('mul(')
        .join('')
        .split(')')
        .join('')
        .split(',')
        .map(Number)
        .reduce((acc, curr) => acc * curr, 1);
};

const star1 = (line: string): number => {
    const matches = line?.match(/mul\([0-9]{1,3},[0-9]{1,3}\)/g) || [];
    return matches
        .map(multiplyNumbersInString)
        .reduce((acc, curr) => acc + curr, 0);
};

const star2 = (line: string): number => {
    const cleanedLine = line.split(/don't\(\)[\w\W]+?do\(\)/g).join('');
    return star1(cleanedLine);
};

const day = (lines: string[]): void => {
    const line = lines?.join('');
    const result1 = star1(line);
    const result2 = star2(line);
    console.log({ result1, result2 });
};

export default day;
