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

function fibonacci(noOfTerm) {
  const fibonacciArray = [];

  for (let nthTerm = 0; nthTerm < noOfTerm; nthTerm++) {
    fibonacciArray[nthTerm] = nthFibonacciTerm(nthTerm + 1);
  }

  return fibonacciArray;
}

//testing starts here
function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(noOfTerms, expectedResult, result) {
  const isEqual = areEqual(result, expectedResult);
  const mark = getMark(isEqual);

  const segment1 = 'The fibonacci series array upto "' + noOfTerms;
  const segment2 = '" is "' + expectedResult + '" and got "' + result + '"';

  return mark + segment1 + segment2;
}

function testFibonacci(noOfTerms, expectedResult) {
  const result = fibonacci(noOfTerms);

  return getMessage(noOfTerms, expectedResult, result);
}

function testAll() {
  console.log(testFibonacci(1, [0]));
  console.log(testFibonacci(2, [0, 1]));
  console.log(testFibonacci(3, [0, 1, 1]));
  console.log(testFibonacci(4, [0, 1, 1, 2]));
  console.log(testFibonacci(5, [0, 1, 1, 2, 3]));
  console.log(testFibonacci(6, [0, 1, 1, 2, 3, 5]));
  console.log(testFibonacci(7, [0, 1, 1, 2, 3, 5, 8]));
}

testAll();