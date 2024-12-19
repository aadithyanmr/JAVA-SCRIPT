/*
  Write a function that returns the first prime number above given number
  
  Examples:
    firstPrimeAbove(3) => 5
    firstPrimeAbove(0) => 2
    firstPrimeAbove(15) => 17

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

// start of code
function isDivisible(numeral, factor) {
  return numeral % factor === 0;
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      return false;
    }
  }

  return true
}

function firstPrimeAbove(number) {
  let primeCandidate = number + 1;

  while (!isPrime(primeCandidate)) {
    primeCandidate++;
  }

  return primeCandidate;
}
// end of code

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function printMessage(number, expectedResult, result) {
  const mark = getMark(result === expectedResult);
  const contextSegment = 'first prime above ' + number;
  const expectationSegment = " must be " + expectedResult;
  const actualSegment = " and is " + result;

  console.log(mark + contextSegment + expectationSegment + actualSegment);
}

function testFirstPrimeAbove(number, expectedResult) {
  const result = firstPrimeAbove(number);

  printMessage(number, expectedResult, result);
}

function testAll() {
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(2, 3);
  testFirstPrimeAbove(3, 5);
  testFirstPrimeAbove(4, 5);
  testFirstPrimeAbove(5, 7);
  testFirstPrimeAbove(6, 7);
  testFirstPrimeAbove(6, 7);
  testFirstPrimeAbove(7, 11);
  testFirstPrimeAbove(8, 11);
  testFirstPrimeAbove(9, 11);
  testFirstPrimeAbove(10, 11);
}

testAll();
