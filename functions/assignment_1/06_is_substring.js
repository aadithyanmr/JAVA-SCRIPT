// Implement the below function that tells if a string is substring of another string
/*

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

// start of code 
function max(value1, value2) {
  return value1 > value2 ? value1 : value2;
}

function min(value1, value2) {
  return value1 < value2 ? value1 : value2;
}

function getSlices(string, subString) {
  for (let index = 0; index < string.length; index++) {
    const endIndexOfCurrentSlice = index + (subString.length - 1);
    
    return slice(string, index, endIndexOfCurrentSlice);
  }
}

function slice(text, start, end) {
  let sliceInRange = "";
  const startingIndex = max(start, 0);
  const endIndex = min(end, text.length - 1);

  for (let index = startingIndex; index <= endIndex; index++) {
    sliceInRange += text[index];
  }

  return sliceInRange;
}

function isSubstring(string, subString) {
  if (subString.length < 1) {
    return false;
  }

  for (let index = 0; index < string.length; index++) {
    const currentSlice = getSlices(string, subString)
    if (subString === currentSlice) {
      return true;
    }
  }

  return false;
}
// end of code

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function printMessage(string, subString, expectedResult, result) {
  const mark = getMark(result === expectedResult);
  const contextSegment = "Is " + subString + " present in " + string;
  const expectationSegment = " must be " + expectedResult;
  const actualSegment = " and is " + result;

  console.log(mark + contextSegment + expectationSegment + actualSegment);
}

function testIsSubString(string, subString, expectedResult) {
  const result = isSubstring(string, subString);

  printMessage(string, subString, expectedResult, result);
}

function testAll() {
  // testIsSubString('', 'a', false);
  // testIsSubString('a', 'a', true);
  testIsSubString('hello world', 'worl', true);
  testIsSubString('hello world', '', false);
  testIsSubString('i', 'iii', false);
  testIsSubString('repeating', 'iii', false);
  testIsSubString('repeating', 'asd', false);
}

testAll();