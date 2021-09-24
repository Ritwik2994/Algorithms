/**
 * time complexity = O(n)
 * @param {number} num
 * @returns
 */
function findFactorial(num) {
    result = 1;
    if (num === 0) {
        return 'factorial of 0 is 1';
    }
    if (num < 0) {
        return 'sorry factorial not possible for negative numbers';
    }

    for (let i = 2; i <= num; i++) {
        result *= i;
    }

    return result;
}

console.log(`factorial of 5 = ${findFactorial(5)}`);
