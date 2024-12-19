// Do not rename string, use it as input for your program.
// While testing we will change it's value.
// const string = "";
// const subString = "";
// Print the count of occurences of a substring in the given string
// If string = "duplicate substring statement" and subString = "ate", then print 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// const string = "this is a this"; const subString = "is"; const expectedOutput = 3;
// const string = "this is a this"; const subString = "that"; const expectedOutput = 0;
// const string = "is it good"; const subString = "is"; const expectedOutput = 1;
// const string = "is it good"; const subString = ""; const expectedOutput = 0;
// const string = "is it"; const subString = "it"; const expectedOutput = 1;
// const string = "aaaaa"; const subString = "aa"; const expectedOutput = 4;
const string = "i am"; const subString = "i am me"; const expectedOutput = 0;

// start of my code

let subStringIndex = 0;
let stringIndex = 0;
let occurenceCount = 0;

while (stringIndex < string.length) { 
    const isCharEqual = subString[subStringIndex] === string[stringIndex];
    const hasSubStringFinished = subStringIndex === subString.length - 1;
    const isEqualButNotFinished = isCharEqual && !hasSubStringFinished;
    const occurenceFound = hasSubStringFinished && isCharEqual;
    
    subStringIndex = isEqualButNotFinished ? subStringIndex + 1 : 0; // 1
    
    if (occurenceFound) {
        occurenceCount = occurenceCount + 1;
        stringIndex = stringIndex - subString.length + 1;
    }  

    stringIndex++;  
}

console.log(occurenceCount);

// end of my code

console.log(string, subString, expectedOutput, occurenceCount, expectedOutput === occurenceCount);