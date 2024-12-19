// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 12;
// Print the binary representation of a
// If a = 12, then the output should be
// 0
// 0
// 1
// 1
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let decimal = a;
let remainder = 0;
let quotient;

while (decimal >= 1) {
    remainder = decimal % 2;
    quotient = (decimal - remainder) / 2;
    decimal = quotient;
    console.log(remainder);
}

if (a === 0) {
    console.log(remainder);
}


