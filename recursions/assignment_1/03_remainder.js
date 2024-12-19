//start
function remainder(dividend, divisor) {
  if (dividend < divisor) {
    return dividend;
  }

  const newDividend = dividend - divisor;

  return remainder(newDividend, divisor);
}
//end

//testing starts here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(dividend, divisor, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = 'the remainder of "' + dividend + '" and "' + divisor;
  const segment2 = '" is "' + expectedResult;
  const segment3 = '" and got "' + result + '"';

  return mark + segment1 + segment2 + segment3;
}

function testRemaider(dividend, divisor, expectedResult) {
  const result = remainder(dividend, divisor);

  return getMessage(dividend, divisor, expectedResult, result);
}

function testAll() {
  console.log(testRemaider(2, 3, 2));
  console.log(testRemaider(3, 3, 0));
  console.log(testRemaider(10, 3, 1));
  console.log(testRemaider(13, 3, 1));
  console.log(testRemaider(10, 2, 0));
  console.log(testRemaider(10, 10, 0));
}

testAll();