const testFunc = (currentNumber: number, nextNumber: number | undefined): "end" | "fail" | "decreasing" | "increasing" => {
    if (nextNumber === undefined) return "end";
    if (currentNumber === nextNumber) return "fail";
    if (currentNumber - 3 === nextNumber || currentNumber - 2 === nextNumber || currentNumber - 1 === nextNumber) {
        return "decreasing";
    } else if (currentNumber + 3 === nextNumber || currentNumber + 2 === nextNumber || currentNumber + 1 === nextNumber) {
        return "increasing";
    }
    return "fail"
};

const star1 = (numberRows: number[][]) => {
    return numberRows.filter(numbers => {
        let isIncreasing = false;
        let isDecreasing = false;

        return numbers.reduce((acc, currentNumber, index) => {
            if (acc === false) return false;

            const nextNumber = numbers[index + 1];
            const result = testFunc(currentNumber, nextNumber);
            if (result === "end") return true;
            if (result === "fail") return false;
            if (result === "increasing") isIncreasing = true;
            if (result === "decreasing") isDecreasing = true;
            if (isIncreasing && isDecreasing) return false;
            
            return true;
        }, true);
    }).length;
}
const star2 = (numberRows: number[][]) => {
    return numberRows.filter((numbers, numberRowIndex) => {
        let isIncreasing = false;
        let isDecreasing = false;
        let failureIndexes = [];

        numbers.reduce((acc, currentNumber, index) => {
            const nextNumber = numbers[index + 1];
            const result = testFunc(currentNumber, nextNumber);
            if (result === "end") return true;
            if (result === "increasing") isIncreasing = true;
            if (result === "decreasing") isDecreasing = true;
            if (isIncreasing && isDecreasing ||  result === "fail") {
                failureIndexes = [...failureIndexes, index + 1];
            }
        }, true);

        if (failureIndexes.length === 0) {
            console.log(numberRowIndex, "success");
            return true;
        }

        const retestAttempts = numbers.map((_, index) => [...numbers.slice(0, index), ...numbers.slice(index + 1)]).map((retestNumbers) => {
            let isIncreasing = false;
            let isDecreasing = false;

            return retestNumbers.reduce((acc, currentNumber, index) => {
                if (acc === false) return false;
                const nextNumber = retestNumbers[index + 1];

                const result = testFunc(currentNumber, nextNumber);
                if (result === "end") return true;
                if (result === "increasing") isIncreasing = true;
                if (result === "decreasing") isDecreasing = true;
                if (isIncreasing && isDecreasing ||  result === "fail") {
                    return false
                }
            }, true);
        }).filter(Boolean).length > 0;
        
        if (retestAttempts) {
            console.log(numberRowIndex, "retest success");
            return true;
        }

        return false;
    }).length;
}

const day = (lines) => {
    const numbers: number[][] = lines.map(line => line.split(' ').map(Number));
    // const result1 = star1(numbers);
    const result2 = star2(numbers);
    console.log({ result2 });
}

export default day;
