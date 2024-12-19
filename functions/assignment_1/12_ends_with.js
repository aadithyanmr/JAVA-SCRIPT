/*
  Write a function that tells if a string ends with a specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false

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

function endsWith(string, subString) {
  const start = string.length - subString.length;
  const end = string.length - 1;

  if (subString === slice(string, start, end)) {
    return true;
  }

  return false;
}
// end of code

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function printMessage(string, subString, expectedResult, result) {
  const mark = getMark(result === expectedResult);
  const contextSegment = "Is " + string + " ends with " + subString;
  const expectationSegment = " must be " + expectedResult;
  const actualSegment = " and is " + result;

  console.log(mark + contextSegment + expectationSegment + actualSegment);
}

function testIsSubString(string, subString, expectedResult) {
  const result = endsWith(string, subString);

  printMessage(string, subString, expectedResult, result);
}

function testAll() {
  testIsSubString('aaa', 'a', true);
  testIsSubString('a', 'a', true);
  testIsSubString('hello world', 'world', true);
  testIsSubString('', '', true);
  testIsSubString('repeating iiiiiiii', 'iii', true);
  testIsSubString('repeating', 'tin', false);
  testIsSubString('repeating', 'rep', false);
}

testAll();