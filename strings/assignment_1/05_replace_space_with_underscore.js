// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = " a   b ";
// Replace all spaces with underscore "_"
// If string = "statement with spaces"
// Then print "statement_with_spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const SPACE = " ";
const UNDERSCORE = "_";
let underscoreAtSpace = "";

for (let index = 0;index < string.length ;index++) {
    const nextChar = (string[index] === SPACE) ? UNDERSCORE : string[index];
    underscoreAtSpace = underscoreAtSpace + nextChar;
}

console.log(underscoreAtSpace);