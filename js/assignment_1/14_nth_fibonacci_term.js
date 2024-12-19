// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 4;

// Print the nth Fibonacci term
// Printing more than one output or printing anything other than the nth Fibonacci term might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE



let seclastTerm = 0;
let lastTerm = 1;
let nextTerm;

for (let nthTerm = 1; nthTerm < n ; nthTerm++ ) {
    nextTerm = seclastTerm + lastTerm;
    seclastTerm = lastTerm;
    lastTerm = nextTerm;
}

if (n > 0) {
    console.log(seclastTerm);
}