/*
 Given a number N return the index value of the Fibonacci sequence.
 Ex: fibo(6)  // return 8;
 Ex: fibo(10) // return 55;
*/

function fibonacci(num) {
    let fibo = [0, 1, 1];
    while (fibo.length <= num){
        let newNum = fibo[fibo.length - 1] + fibo[fibo.length -2]
        fibo.push(newNum);
    }
    return fibo[num];
}
