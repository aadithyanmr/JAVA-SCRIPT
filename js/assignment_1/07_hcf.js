// Do not rename a and b, use them as input for your program.
// a and b will be whole numbers.
// While testing we will change their values.
const a = 10;
const b = 5;

// Print the HCF of a and b
// Printing more than one output or printing anything other than HCF might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let hcf = 1;
let largeNo = a;

if (a < b) {
    largeNo = b;
}

for (let divisor = 2;divisor <= largeNo; divisor++) {
    if (a % divisor != 0) {
       continue;  
    }

    if (b % divisor === 0) {
        hcf = divisor;
    }
}

console.log(hcf);
