/* 
The new guy in your team wrote this terrible code
and now he's asking you why it doesn't work...

He's telling you the specs are:
    - the function receives an array (of integers) or null.
    - the function should return the minimum and maximum values (of the given array)
    - the return value should also be an array, i.e: [min, max]

Example 1:
Array: [4, 6, 35, -65, -9, 0, 67]
Result: [-65, 67]

Example 2:
Array: [-30, 5, 43, 108, -5, -7, 89]
Result: [-30, 108]

Example 3:
Array: [56, 7, 63, 9, 7, 12, 85]
Result: [7, 85]

Fix the following function to help your new coworker!

Note: try changing only the necessary code, don't rewrite the entire thing. 
*/

// >----Defitinion----<

var minMax = (array) => { 
    let min = 0; // arbitrary value to be reset with the scanned array.
    let max = 0; // ibidem
    let gotMin = false ; // true, when the array just has been scanned. 
    let gotMax = false ; // ibidem

    for (let i = 0; i < array.length; i++) {
     
        if (array[i] > max) {

            max = array[i] ;
            gotMax = true ;

        } else if(!gotMax) {

            max = array[i]; // remove the default arbitrary value with a temporary max from the array .
            gotMax = true ; // the array is being scanned . 
        } 
            
        if (array[i] < min) {
            min = array[i];
            gotMin = true ;

        } else if (!gotMin){

                min = array[i]; // remove the default arbitrary value with a temporary max from the array .
                gotMin = true ; // the array is being scanned .
        }

        
    }
    const tipsArray = [min, max] ;
    return tipsArray;
} // >----o----<

var examples  = [[4, 6, 35, -65, -9, 0, 67], [-30, 5, 43, 108, -5, -7, 89], [56, 7, 63, 9, 7, 12, 85], [-10, -6, -5, -2, -3, -1],] ;

examples.forEach((array) => {console.log(minMax(array)); }) ;
