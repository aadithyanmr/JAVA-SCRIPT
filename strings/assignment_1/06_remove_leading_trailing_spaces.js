// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "                    ";
// Remove spaces at the start and end of the given string
// If string = " spaces at the start and the end "
// Then print "spaces at the start and the end"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let startingOfChar = 0;
let endingOfChar = string.length - 1;
let trailTrimmedString = "";

while (string[startingOfChar] === " " ) {
    startingOfChar++;
}

while (string[endingOfChar] === " ") { 
    endingOfChar--;
}

while (startingOfChar <= endingOfChar) {
    trailTrimmedString = trailTrimmedString + string[startingOfChar];
    startingOfChar++;
}

console.log(trailTrimmedString);