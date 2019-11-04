/*
Given a number that represents the position of the minute hand on a clock (number of minutes from 0 - 60) write a program that returns the angle that is formed by the minute hand and 12.

If the user enters a number that is above 60, your program should fail, and log a friendly message to the console, informing the user of their error. 
(Hint: Create an HTML UI to capture input and display the result of running you algorithm)
*/

const button = document.getElementById("submit");

button.addEventListener("click", function(event) {
  event.preventDefault();
  let minute = document.getElementById("minute").value;
  let angle = minuteAngle(minute);
  document.getElementById("result").innerHTML = `${angle} &#176`;
});

function minuteAngle(minute) {
  if (minute < 0 || minute > 60) {
    alert("Please enter a number between 0 and 60");
  } else {
    let separation = 360 / 60;
    let angle = separation * minute;
    return angle;
  }
}
