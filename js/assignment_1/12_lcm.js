// Do not rename a and b, use them as input for your program.
// a and b will be natural numbers.
// While testing we will change their values.
const a = 12;
const b = 18;
// Print the lcm of a and b
// Printing more than one output or printing anything other than lcm might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let multipleOfA = a;

for (let multiplier = 1; multiplier <= b;multiplier++) {
    multipleOfA = a * multiplier;
    if (multipleOfA % b === 0) {
        break;
    }
}

console.log(multipleOfA);
