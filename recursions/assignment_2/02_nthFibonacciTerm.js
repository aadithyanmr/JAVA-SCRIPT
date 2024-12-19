//start
function findNthFibonacciTerm(nthTerm, currentTerm, nextTerm) {
  if (nthTerm === 1) {
    return currentTerm;
  }

  return findNthFibonacciTerm(nthTerm - 1, nextTerm, currentTerm + nextTerm);
}

function nthFibonacciTerm(nthTerm) {
  return findNthFibonacciTerm(nthTerm, 0, 1);
}
//end

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(nthTerm, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = 'term  "' + nthTerm + '" of fibonacci series';
  const segment2 = ' is ' + expectedResult;
  const segment3 = ' and got ' + result

  return (mark + segment1 + segment2 + segment3);
}

function testNthFibonacciTerm(nthTerm, expectedResult) {
  const result = nthFibonacciTerm(nthTerm);

  return getMessage(nthTerm, expectedResult, result);
}

function testAll() {
  console.log(testNthFibonacciTerm(1, 0));
  console.log(testNthFibonacciTerm(2, 1));
  console.log(testNthFibonacciTerm(3, 1));
  console.log(testNthFibonacciTerm(4, 2));
  console.log(testNthFibonacciTerm(5, 3));
  console.log(testNthFibonacciTerm(6, 5));
  console.log(testNthFibonacciTerm(7, 8));
}

testAll();