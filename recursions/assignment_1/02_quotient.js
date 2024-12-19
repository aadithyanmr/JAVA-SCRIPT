//start
function quotient(dividend, divisor) {
  if (dividend < divisor) {
    return 0;
  }

  const newDivident = dividend - divisor;

  return 1 + quotient(newDivident, divisor);
}
//end

//testing starts here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(dividend, divisor, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = 'the quotient of "' + dividend + '" and "' + divisor;
  const segment2 = '" is "' + expectedResult;
  const segment3 = '" and got "' + result + '"';

  return mark + segment1 + segment2 + segment3;
}

function testQuotient(dividend, divisor, expectedResult) {
  const result = quotient(dividend, divisor);

  return getMessage(dividend, divisor, expectedResult, result);
}

function testAll() {
  console.log(testQuotient(1, 1, 1));
  console.log(testQuotient(2, 1, 2));
  console.log(testQuotient(3, 2, 1));
  console.log(testQuotient(3, 1, 3));
  console.log(testQuotient(10, 3, 3));
  console.log(testQuotient(10, 2, 5));
}

testAll();