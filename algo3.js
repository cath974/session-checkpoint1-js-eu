/*
 Given a number N return the index value of the Fibonacci sequence.
 Ex: fibo(6)  // return 8;
 Ex: fibo(10) // return 55;
*/

function fibonacci(num) {
    let a = 0;
    let b = 1;
    let fNext = 0;
    // let res = 0;

    for (let i = 0; i < num -1; i ++) {
        fNext = a + b
        a = b
        b = fNext
    }
    return b
}

console.log(fibonacci(10))