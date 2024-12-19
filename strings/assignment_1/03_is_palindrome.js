// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "abcdef";
// Print true if the given string is palindrome otherwise false
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let reversedString = "";

for (let index = string.length - 1; index >= 0; index--) {
    reversedString = reversedString + string[index];
}

console.log(string === reversedString);