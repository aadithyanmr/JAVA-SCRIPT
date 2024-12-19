// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "    This   sentence   will   be    neater   when    after    it    excutes    ";
// Replace duplicate spaces with single space
// If string = "statement      with    two spaces"
// Then print "statement with two spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const SPACE = " ";
let replacedString = "";

for (let index = 0; index < string.length; index++) {
    if (string[index] === SPACE && string[index + 1] !== SPACE) {
        replacedString = replacedString + SPACE;
    }
    
    if (string[index] !== SPACE) {
        replacedString = replacedString + string[index];
    }
}

console.log(replacedString);