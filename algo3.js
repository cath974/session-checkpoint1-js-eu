/*
 Given a number N return the index value of the Fibonacci sequence.
 Ex: fibo(6)  // return 8;
 Ex: fibo(10) // return 55;
*/


function fibonacci(num){
    var a = 1, b = 0, temp;

    while (num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
console.log(b);
    return b;
}

//we calculate the next number by adding the
// current number to the old number.