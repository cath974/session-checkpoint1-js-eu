/*
 Given a number N return the index value of the Fibonacci sequence.
 Ex: fibo(6)  // return 8;
 Ex: fibo(10) // return 55;
*/

function fibonacci(num) {
    let fibbo = [];
    fibbo[0] = 0;
    fibbo[1] = 1;
    let response;
    
    if(isNaN(num)) {
        console.error("Number it must be an integer.")
    }
 
    for(i = 2; i <=num; i++) {
        fibbo[i] = fibbo[i-2] + fibbo[i-1];
        if(fibbo.indexOf(num) !== -1) {
            response = fibbo[num];
        } else if(fibbo[i] > num) {
            console.error('Not a Fibonacci number.Try again!')
        }
    }
  return response;

}
