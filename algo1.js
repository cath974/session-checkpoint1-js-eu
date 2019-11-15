// import { start } from "repl"
// import { endianness } from "os"

/*
We're building a ticket selling app for a cinema and we need to represent
all the seats in the main room.

In this room, the seats are organized as follows: 
    - There are 26 rows of seats. Each row is numbered from "1" to "26" 
    - Each row has 100 seats. Each seat is numbered from "1" to "100"
    

Create a function that returns an array of seats.
Each item in the array should be in the form: row-seat.

The final array should look something like this:
[
    1-1,
    1-2,
    1-3,
    .
    .
    .
    26-98,
    26-99,
    26-100
]
rowStart, rowEnd, seatsStart, seatsEnd
*/

function returnNoSeats() {
    let rowStart = 1;
    let rowEnd = 26;
    let seatsStart = 1;
    let seatsEnd = 100;
    let rowArr = [];
    let seatsArr = [];
    let result = [];
    let temp;
    
    for(let i = rowStart; i <= rowEnd; i++) {
        rowArr.push(i);
    }
    
    for(let i = seatsStart; i<= seatsEnd; i++) {
        seatsArr.push(i);
    }
    
    for(let i = 0; i< rowArr.length; i++){
         for(let j = 0; j < seatsArr.length; j++) {
             let temp2 = rowArr[i].toString();
             let temp3 = seatsArr[j].toString();
             temp = `${temp}-${temp3}`;
             result.push(temp);
      }
    }
  return result;
}

returnNoSeats();
