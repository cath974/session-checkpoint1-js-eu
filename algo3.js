/*
 Given a number N return the index value of the Fibonacci sequence.
 Ex: fibo(6)  // return 8;
 Ex: fibo(10) // return 55;
*/


function fibonacci(num){
    var myArray = [];
    myArray[0] = 0;
    myArray[1] = 1;
    if (num < 2){
        return myArray[num];
    } else {
        for (let i = 2; i <= num; i++){
            myArray[i] = myArray[i-1] + myArray[i-2];
        }
        return myArray[num];
    }
}

console.log(fibonacci(6));

//we calculate the next number by adding the
// current number to the old number.