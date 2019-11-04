/*
Given a number that represents the position of the minute hand on a clock (number of minutes from 0 - 60) write a program that returns the angle that is formed by the minute hand and 12.

If the user enters a number that is above 60, your program should fail, and log a friendly message to the console, informing the user of their error. 
(Hint: Create an HTML UI to capture input and display the result of running you algorithm)
*/

function minuteAngle(minute) {
    if(minute > 0 && minute <= 60){
        var res = minute * 6;
        return res;
    } else {
        return "You need to insert a valid number"
    }
}

console.log(minuteAngle(30));