//start
function isDivisible(divident, divisor) {
  return divident % divisor === 0;
}

function hasFactorInRange(number, from, to) {
  if (from === to) {
    return false;
  }

  if (isDivisible(number, from)) {
    return true;
  }

  return hasFactorInRange(number, from + 1, to)
}

function isPrime(primeCandidate) {
  if (primeCandidate < 2) {
    return false;
  }

  return !hasFactorInRange(primeCandidate, 2, primeCandidate);
}
//main function
function firstPrimeAbove(number) {
  const nextNumber = number + 1;

  if(isPrime(nextNumber)) {
    return nextNumber;
  }

  return firstPrimeAbove(nextNumber);
}
//end

//testing starts here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(number, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = ' the first prime above ' + number;
  const segment2 = ' should be "' + expectedResult;
  const segment3 = '" and got "' + result + '"';

  return mark + segment1 + segment2 + segment3;
}

function testFirstPrimeAbove(number, expectedResult) {
  const result = firstPrimeAbove(number);

  return getMessage(number, expectedResult, result);
}

function testAll() {
  console.log(testFirstPrimeAbove(0, 2));
  console.log(testFirstPrimeAbove(1, 2));
  console.log(testFirstPrimeAbove(2, 3));
  console.log(testFirstPrimeAbove(3, 5));
  console.log(testFirstPrimeAbove(4, 5));
  console.log(testFirstPrimeAbove(5, 7));
  console.log(testFirstPrimeAbove(6, 7));
  console.log(testFirstPrimeAbove(7, 11));
}

testAll();