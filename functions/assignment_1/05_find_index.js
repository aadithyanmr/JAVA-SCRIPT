/*
  Implement the below function to find the first index of a character
  Return -1 if the target character is absent 

  Examples:
    findIndex('hello world', 'o') => 4
    findIndex('repeating iiiiiiii', 'i') => 6
    findIndex('not found', 'z') => -1

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

// start of my code
function findIndex(text, target) {
  for (let index = 0; index < text.length; index++) {
    if (text[index] === target) {
      return index;
    }
  }

  return -1;
}
// end of my code

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function printMessage(test, target, expectedResult, result) {
  const mark = getMark(result === expectedResult);
  const contextSegment = "Index of " + target + " in " + test;
  const expectationSegment = " is " + expectedResult;
  const actualSegment = " and is " + result;

  console.log(mark + contextSegment + expectationSegment + actualSegment);
}

function testFindIndex(test, target, expectedResult) {
  const result = findIndex(test, target);

  printMessage(test, target, expectedResult, result);
}

function testAll() {
  testFindIndex('o', 'o', 0);
  testFindIndex('oo', 'o', 0);
  testFindIndex('', 'o', -1);
  testFindIndex('string', 'o', -1);
  testFindIndex('string', '', -1);
}

testAll();