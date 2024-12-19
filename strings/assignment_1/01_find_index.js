// Do not rename string and charToFind, use them as input for your program.
// While testing we will change their values.
const string = 'abcdefd';
const charToFind = 'f';
// Print the first index of the character in given string. Consider case sensitivity.
// If character not present in string print -1
// If string = "abccdef" and charToFind = "c", then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let indexOfCharToFind = -1;
let index = 0;

while (index < string.length && indexOfCharToFind === -1) {
    if (string[index] === charToFind) {
        indexOfCharToFind = index;
    }
    index++;
}

console.log(indexOfCharToFind);