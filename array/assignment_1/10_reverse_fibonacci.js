function reverse(array) {
  const endIndex = array.length - 1;
  const reverseArray = [];

  for (let index = 0; index < array.length; index++) {
    reverseArray[endIndex - index] = array[index];
  }

  return reverseArray;
}

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

function fibonacci(noOfTerms) {
  const fibonacciArray = [];

  for (let nthTerm = 0; nthTerm < noOfTerms; nthTerm++) {
    fibonacciArray[nthTerm] = nthFibonacciTerm(nthTerm + 1);
  }

  return fibonacciArray;
}

function reverseFibonacci(noOfTerms) {
  const fibonacciSeries = fibonacci(noOfTerms);

  return reverse(fibonacciSeries);
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

function testReverseFibonacci(noOfTerms, expectedResult) {
  const result = reverseFibonacci(noOfTerms);

  return getMessage(noOfTerms, expectedResult, result);
}

function testAll() {
  console.log(testReverseFibonacci(1, [0]));
  console.log(testReverseFibonacci(2, [1, 0]));
  console.log(testReverseFibonacci(3, [1, 1, 0]));
  console.log(testReverseFibonacci(4, [2, 1, 1, 0]));
  console.log(testReverseFibonacci(5, [3, 2, 1, 1, 0]));
  console.log(testReverseFibonacci(6, [5, 3, 2, 1, 1, 0]));
  console.log(testReverseFibonacci(7, [8, 5, 3, 2, 1, 1, 0]));
}

testAll();