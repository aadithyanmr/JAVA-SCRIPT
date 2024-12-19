// Do not rename sentence, use it as input for your program.
// While testing we will change it's value.
// const sentence = "this is cool";
//  Reverse the sentence
// If sentence = "this is cool" then Output should be "cool is this"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// const sentence = "this"; const expectedOutPut = "this"
// const sentence = "this is"; const expectedOutPut = "is this"
// const sentence = "this "; const expectedOutPut = " this"
// const sentence = " this is"; const expectedOutPut = "is this "
// const sentence = "this is "; const expectedOutPut = " is this"
// const sentence = " this  is "; const expectedOutPut = " is  this "
// const sentence = "  "; const expectedOutPut = "  "
const sentence = ""; const expectedOutPut = ""

// my code

let SPACE = " ";
let reversedString = "";
let word = "";

for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] !== SPACE) {
        word = word + sentence[index];
    }
    
    if (index + 1 === sentence.length || sentence[index] === SPACE) {
        reversedString = word + reversedString;
        word = "";
    }
    
    if (sentence[index] === SPACE) {
        reversedString = SPACE + reversedString;
    }
}

console.log(reversedString);


// my code

console.log(reversedString, expectedOutPut, expectedOutPut === reversedString);
