/*
 Given a number N return the index value of the Fibonacci sequence.
 Ex: fibo(6)  // return 8;
 Ex: fibo(10) // return 55;
*/

function fibonacci(num) {
    let fibonacciNumbers = []
    let fibonacciNumber = 1;
    let numberToAdd = 0;
    let tempResult = 0;

    for(let i = 0; i < num; i++) {
      tempResult = fibonacciNumber;
      fibonacciNumber = fibonacciNumber + numberToAdd;
      numberToAdd = tempResult;
      fibonacciNumbers.push(tempResult)
    }

    return tempResult;
}

const result = fibonacci(6);
const result2 = fibonacci(10)

console.log(result, result2)