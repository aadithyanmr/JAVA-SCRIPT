// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'abcba';
// Reverse the given string
// If string = "reverse" then output should be "esrever"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let reversedString = "";

for (let index = string.length - 1; index >= 0; index--) {
    reversedString = reversedString + string[index];
}

console.log(reversedString);
