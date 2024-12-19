/*
  Implement the below function that tells if a given year is leap or not.
  Examples:
    isLeapYear(1900) => false
    isLeapYear(2020) => true
    isLeapYear(2001) => false

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

// start of code 
function isDivisible(divident, divisor) {
  return divident % divisor === 0;
}

function isLeapYear(year) {
  if (isDivisible(year, 400)) {
    return true;
  }

  return !isDivisible(year, 100) && isDivisible(year, 4);
}
// end of code

function getIndicator(isEqual) {
  return isEqual ? "✅" : "❌";
}

function printMessage(year, expectedResult, result) {
  const indicator = getIndicator(result === expectedResult);
  const givingSegment = "Is " + year + " | leapYear ? |";
  const expectationSegment = " is  " + expectedResult;
  const actualSegment = " |  and got " + result;

  console.log(indicator + givingSegment + expectationSegment + actualSegment);
}

function testIsLeap(year, expectedResult) {
  const result = isLeapYear(year);

  printMessage(year, expectedResult, result);
}

function testAll() {
  testIsLeap(4, true);
  testIsLeap(100, false);
  testIsLeap(400, true);
  testIsLeap(1, false);
  testIsLeap(2000, true);
}

testAll();