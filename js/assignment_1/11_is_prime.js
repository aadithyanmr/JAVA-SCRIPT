// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 0;
// Print true if a is prime otherwise print false
// Printing more than one output or printing anything other than prime or not prime might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let number = a;
let noOfFactors = 0;

for (let divisor = 1; divisor <= number; divisor++) {
    if (number % divisor === 0) {
        noOfFactors = noOfFactors + 1;
    }
}

console.log(noOfFactors === 2);