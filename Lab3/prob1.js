"use strict";
/** function expression */
const computeSumOfSquares = function(arrayOfNumbers) {
    return arrayOfNumbers.map(x => x * x).reduce((a, b)=> a + b, 0);
    };
console.log(computeSumOfSquares([1,2,3]));

/** arrow function */
const printOddNumbersOnly = (arr)=> {
    arr.filter(x => x % 2 !== 0).forEach(element => console.log(element));
}
printOddNumbersOnly([1, 2, 3, 4, 5]);

/**regular function */
function printFibo(n, a, b) {
    function generateFibo(n, seq) {
      if (n <= seq.length) {
        return seq.slice(0, n);
      }
      const next = seq[seq.length - 1] + seq[seq.length - 2];
      return generateFibo(n, [...seq, next]);
    }
  
    const result = n === 0 ? [] : n === 1 ? [a] : generateFibo(n, [a, b]);
    console.log(result.join(', '));
  }

printFibo(2, 0, 1);
printFibo(3, 0, 1);
printFibo(6, 0, 1);
printFibo(10, 0, 1);