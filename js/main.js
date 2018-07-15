/* Code for WATS 3020 FizzBuzz Assignment */

let isInteger,
    maxNumber,
    fbResults,
    fbText;



isInteger = false;


// !isInteger would mean it is true since isInteger = false
while (!isInteger) {
    // In order for the maxNumber to be "legit" we need to know:
    // 1. It's an integer
    // 2. Is over zero

// Prompt the user for the `maxNumber` value.
    maxNumber = prompt('Enter an integer over zero, choose wisely:');
    
// Use a conditional to verify if the `maxNumber`
// is a suitable integer. (It should be an integer greater than zero.)    
    maxNumber = parseInt(maxNumber);
    if (Number.isSafeInteger(maxNumber) && maxNumber > 0) {
        isInteger = true;
        
// I set up an alert to let the user know they didn't choose an integer over zero
    } else {
        alert('I SAID AN INTEGER OVER ZERO!')
    }
} 


// Initialize the `fbResults` variable to an empty Array

fbResults = [];

// `for` loop that will execute the `maxNumber` of times.

for (let i = 1; i <= maxNumber; i++){
// If it is divisible by 3 'Fizz' will show up. If it is divisible by 5 'Buzz' will show up. If divisible by both 3 and 5 'FizzBuzz' will show up.
    if(i % 15 == 0){
        fbResults.push('FizzBuzz');
    } else if (i % 3 == 0) {
        fbResults.push('Fizz');
    } else if (i % 5 == 0) {
        fbResults.push('Buzz');
    } else {
        fbResults.push(i);
    }
    
}


fbText = '';


for (let result of fbResults) {
    fbText = fbText + result + "\n";
}


///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
