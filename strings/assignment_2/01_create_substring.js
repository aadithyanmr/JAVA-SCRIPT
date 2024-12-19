// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "this is a statement";
const start = 3;
const end = 9;
// Print the substring from the given string using start index and end index.
// If string = "this is a statement", start = 3 and end = 9, then print "s is a "
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const ZERO = 0;
let substring = "";
let index = start >= 0 ? start : ZERO;

while (index <= end && index < string.length) {
    substring += string[index];
    index++;
}

console.log(substring);
