// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'aAeEiIoOuU';
// Print the number of vowles in given string. Consider case sensitivity.
// If string = "abcdefghi" then output should be 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let vowelCount = 0;

for (let index = 0; index < string.length; index++) {
    switch (string[index]) {
        case "a":
            vowelCount++;
            break;
        case "e":
            vowelCount++;
            break;
        case "i":
            vowelCount++;
            break;
        case "o":
            vowelCount++;
            break;
        case "u":
            vowelCount++;
            break;
        case "A":
            vowelCount++;
            break;
        case "E":
            vowelCount++;
            break;
        case "I":
            vowelCount++;
            break;
        case "O":
            vowelCount++;
            break;
        case "U":
            vowelCount++;
            break;
    }
}

console.log(vowelCount);