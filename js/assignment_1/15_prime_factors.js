// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 1024;
// Print the prime factors of a
// For example, if a = 12, then the output should be
// 2
// 2
// 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE


let number = a;
let incrementer = 2;
let primeFactors;

while (number >= incrementer) {
    if (number % incrementer === 0) {
        primeFactors = incrementer;
        number = number / incrementer;
        console.log(primeFactors);
    } else {
        incrementer = incrementer + 1;
    }
}