// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 4;
// Print the series till nth Fibonacci term
// Example if n = 7, then the output should be
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let nthTerm = 0;
let lastTerm = 1;
let nextTerm;

for (let nthTerm = 0; nthTerm < n ; nthTerm++ ) {
    console.log(nthTerm);
    nextTerm = nthTerm + lastTerm;
    nthTerm = lastTerm;
    lastTerm = nextTerm;
}
