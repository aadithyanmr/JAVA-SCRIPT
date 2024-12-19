/*
  Implement the below function to calculate the factorial of `number`.
  Examples:
    factorial(3) => 6
    factorial(5) => 120
    factorial(0) => 1

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

// start of code 
function factorial(number) {
  let product = 1;

  for (let term = number; term > 0; term--) {
    product = product * term;
  }

  return product;
}
// end of code

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function printMessage(number, expectedResult, result) {
  const mark = getMark(result === expectedResult);
  const contextSegment = "factorial of " + number;
  const expectationSegment = " is " + expectedResult;
  const actualSegment = " and is " + result;

  console.log(mark + contextSegment + expectationSegment + actualSegment);
}

function testFactorial(number, expectedResult) {
  const result = factorial(number);

  printMessage(number, expectedResult, result);
}

function testAll() {
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(2, 2);
  testFactorial(3, 6);
  testFactorial(4, 24);
}

testAll();