//start
function multiply(multiplier, multiplicand) {
  const isAnyInputZero = (multiplier === 0 || multiplicand === 0);

  if (isAnyInputZero) {
    return 0;
  }

  return multiplicand + multiply(multiplier - 1, multiplicand);
}
//end

//testing starts here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(multiplier, multiplicand, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = 'the product of "' + multiplier + '" and "' + multiplicand;
  const segment2 = '" is "' + expectedResult;
  const segment3 = '" and got "' + result + '"';

  return mark + segment1 + segment2 + segment3;
}

function testMultiply(multiplier, multiplicand, expectedResult) {
  const result = multiply(multiplier, multiplicand);

  return getMessage(multiplier, multiplicand, expectedResult, result);
}

function testAll() {
  console.log(testMultiply(1, 1, 1));
  console.log(testMultiply(1, 4, 4));
  console.log(testMultiply(2, 4, 8));
  console.log(testMultiply(0, 4, 0));
  console.log(testMultiply(4, 0, 0));
  console.log(testMultiply(4, 4, 16));
}

testAll();