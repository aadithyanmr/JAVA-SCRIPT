/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

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

function slice(text, start, end) {
  let sliceInRange = "";
  const startingIndex = max(start, 0);
  const endIndex = min(end, text.length - 1);

  for (let index = startingIndex; index <= endIndex; index++) {
    sliceInRange += text[index];
  }

  return sliceInRange;
}

function occurrences(string, subString) {
  let noOfOccurrence = 0;

  if (subString.length < 1) {
    return 0;
  }

  for (let index = 0; index <= string.length - subString.length; index++) {
    const endIndexOfCurrentSlice = index + (subString.length - 1);

    if (subString === slice(string, index, endIndexOfCurrentSlice)) {
      noOfOccurrence++;
    }
  }

  return noOfOccurrence;
}
// end of code

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function printMessage(string, subString, expectedResult, result) {
  const mark = getMark(result === expectedResult);
  const contextSegment = "In " + string + ", " + "occurrence of " + subString;
  const expectationSegment = " must be " + expectedResult + " times";
  const actualSegment = " and is " + result;

  console.log(mark + contextSegment + expectationSegment + actualSegment);
}

function testOccurrences(string, subString, expectedResult) {
  const result = occurrences(string, subString);

  printMessage(string, subString, expectedResult, result);
}

function testAll() {
  testOccurrences('', 'a', 0);
  testOccurrences('a', 'a', 1);
  testOccurrences('hello world', 'world', 1);
  testOccurrences('is this is', 'is', 3);
  testOccurrences('is this is', '', 0);
  testOccurrences('i', 'iii', 0);
  testOccurrences('iii', 'i', 3);
  testOccurrences('repeating', 'eat', 1);
}

testAll();