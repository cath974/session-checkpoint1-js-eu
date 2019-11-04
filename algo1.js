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
*/

// ecriture avant ES6 :

// >---- Definition ----<

function seatNumbers (maxRow = 26, maxSeats = 100) {  
    let itsRow = 1 ;
    let itsSeat = 1 ;
    const listSeats = [] ;

    for (let i=0 ; i < maxRow ; i++) {
        for (let j=0 ; j < maxSeats; j++) {

            listSeats.push(itsRow +'-'+ itsSeat)

            itsSeat++ ;
        }
        itsSeat = 1 ;
        itsRow++ ;
    }
    itsRow = 1 ;
    return listSeats ;
}   
// >---- o ----<

let see = seatNumbers() ;   // <---- execution ---->

console.log(see) ;
