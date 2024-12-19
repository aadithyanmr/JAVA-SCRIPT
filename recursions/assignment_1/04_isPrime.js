//start
function isDivisible(divident, divisor) {
  return divident % divisor === 0;
}

function hasFactorInRange(primeCandidate, from, to) {
  if (from === to) {
    return false;
  }

  if (isDivisible(primeCandidate, from)) {
    return true;
  }

  return hasFactorInRange(primeCandidate, from + 1, to)
}
//main function
function isPrime(primeCandidate) {
  if (primeCandidate < 2) {
    return false;
  }

  return !hasFactorInRange(primeCandidate, 2, primeCandidate);
}
//end

//testing starts here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(primeCandidate, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = primeCandidate;
  const segment2 = ' is a prime should be "' + expectedResult;
  const segment3 = '" and got ' + result + '"'

  return mark + segment1 + segment2 + segment3;
}

function testIsPrime(primeCandidate, expectedResult) {
  const result = isPrime(primeCandidate);

  return getMessage(primeCandidate, expectedResult, result);
}

function testAll() {
  console.log(testIsPrime(0, false));
  console.log(testIsPrime(1, false));
  console.log(testIsPrime(2, true));// fix
  console.log(testIsPrime(3, true));
  console.log(testIsPrime(4, false));
  console.log(testIsPrime(5, true));
  console.log(testIsPrime(6, false));
  console.log(testIsPrime(7, true));
}

testAll();