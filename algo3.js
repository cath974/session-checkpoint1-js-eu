/*
 Given a number N return the index value of the Fibonacci sequence.
 Ex: fibo(6)  // return 8;
 Ex: fibo(10) // return 55;
*/

function fibonacci(num) {
  let index = num;
  let element;
  let array = [];
  array[0] = 0;


  var i = 1;
  var j = 1;

  while (num > 0) {
    array.push(i, j);
    i = i + j;
    j = i + j;
    num--;
  }

  element = array[index];

  return element;
}