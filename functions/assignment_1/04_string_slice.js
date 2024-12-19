/*
  Implement the below function that
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

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
// end of code

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getContextSegment(text, start, end) {
  return ("slice of " + text + " from index " + start + " to " + end);
}

function printMessage(text, start, end, expectedResult, result) {
  const mark = getMark(result === expectedResult);
  const contextSegment = getContextSegment(text, start, end);
  const expectationSegment = " is | " + expectedResult;
  const actualSegment = " | and got | " + result;

  console.log(mark + contextSegment + expectationSegment + actualSegment);
}

function testSlice(text, start, end, expectedResult) {
  const result = slice(text, start, end);

  printMessage(text, start, end, expectedResult, result);
}

function testAll() {
  testSlice('hello world', 0, 4, 'hello');
  testSlice('negative start', -1, 8, 'negative ');
  testSlice('', 0, 10, '');
  testSlice('a String', -2, 20, 'a String');
  testSlice('another string', 0, 0, 'a');
}

testAll();