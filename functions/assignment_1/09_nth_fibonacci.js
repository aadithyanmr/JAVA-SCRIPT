/*
  Write a function that returns the nth fibonacci term
  
  Examples:
    nthFibonacciTerm(1) => 0
    nthFibonacciTerm(4) => 2
    nthFibonacciTerm(6) => 5

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

// start of code
function nthFibonacciTerm(number) {
  let seclastTerm = -1;
  let lastTerm = 1;

  for (let nthTerm = 0; nthTerm < number; nthTerm++) {
    let nextTerm = seclastTerm + lastTerm;
    seclastTerm = lastTerm;
    lastTerm = nextTerm;
  }

  return lastTerm;
}
// end of code

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function printMessage(number, expectedResult, result) {
  const mark = getMark(result === expectedResult);
  const contextSegment = number + 'th term of fibonacci ';
  const expectationSegment = " must be " + expectedResult;
  const actualSegment = " and is " + result;

  console.log(mark + contextSegment + expectationSegment + actualSegment);
}

function testNthFibonacciTerm(number, expectedResult) {
  const result = nthFibonacciTerm(number);

  printMessage(isEqual, number, expectedResult, result);
}

function testAll() {
  testNthFibonacciTerm(1, 0);
  testNthFibonacciTerm(2, 1);
  testNthFibonacciTerm(3, 1);
  testNthFibonacciTerm(4, 2);
  testNthFibonacciTerm(5, 3);
  testNthFibonacciTerm(6, 5);
}

testAll();
