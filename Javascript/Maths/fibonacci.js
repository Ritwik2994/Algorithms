/**
 * Fibonacci series = 0,1,1,2,3,5,8
 *
 * logic = 0+1 = 1, 1+1 = 2, 2+1 = 3, 3+2 = 5, 5+3 = 8
 *
 * time complexity = O(n)
 * space complexity = O(n)
 *
 * @param {positive number} num
 * @returns sequence in form of array
 */

function fibonacciSeries(num) {
    const sequence = [];

    if (num <= 0) return 0;
    if (num === 1) return 1;

    sequence.push(1);
    sequence.push(1);

    for (let i = 2; i < num; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    console.log(`Fibonacci of ${num} = ${sequence[sequence.length - 1]}`);

    return sequence;
}

console.log(`Fibonacci series of 8 = ${fibonacciSeries(8)}`);
