/*
 Given a number N return the index value of the Fibonacci sequence.
 Ex: fibo(6)  // return 8;
 Ex: fibo(10) // return 55;
*/

// function fibonacci(num) {
//     var fiboArray = [];
//     fiboArray[0] = 0;
//     fiboArray[1] = 1;
//     for (let i = 2; i <= num; i++) {

//     }
// };

function fibonacciInOneLine(num) {
      return num < 2 ? num : fibonacci(num-1) + fibonacci(num-2);

};