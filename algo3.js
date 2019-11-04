/*
 Given a number N return the index value of the Fibonacci sequence.
 Ex: fibo(6)  // return 8;
 Ex: fibo(10) // return 55;
*/

const fibonacci = (number) => {
    let array = [0, 1];
    for (let i = 2; i < number + 1; i++){
      array.push(array[i - 2] + array[i -1])
    }
   return array[number]
  }

//console.log(fibonacci(6))