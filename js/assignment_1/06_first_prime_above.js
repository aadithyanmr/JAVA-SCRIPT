// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 1;
// Print the first prime number above a
// Printing more than one output or printing anything other than the first prime number above a might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE


let numberAbove = a;
let prime = false;

while (!prime) {
    numberAbove = numberAbove + 1;
    
    if (numberAbove === 2) {
        prime = true;
    }

    for (let divisor = 2;divisor < numberAbove; divisor++) {
        prime = ((numberAbove % divisor) !== 0);
        if (!prime){
            break;
        }
    }

}
console.log(numberAbove);
