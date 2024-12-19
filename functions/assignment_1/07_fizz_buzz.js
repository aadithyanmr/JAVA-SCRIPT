/*
  Write a function that takes an integer as input and returns a string.

  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
  
  **There won't be any negative numbers**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

// start of code 
function fizzBuzz(number) {
  if (number % 15 === 0) {
    return 'fizzbuzz';
  }

  if (number % 3 === 0) {
    return 'fizz';
  }

  if (number % 5 === 0) {
    return 'buzz';
  }

  return '' + number;
}
// end of code

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function printMessage(number, expectedResult, result) {
  const mark = getMark(result === expectedResult);
  const contextSegment = "input is " + number;
  const expectationSegment = " must be " + expectedResult;
  const actualSegment = " and is " + result;

  console.log(mark + contextSegment + expectationSegment + actualSegment);
}

function testFizzBuzz(number, expectedResult) {
  const result = fizzBuzz(number);

  printMessage(number, expectedResult, result);
}

function testAll() {
  testFizzBuzz(3, 'fizz');
  testFizzBuzz(5, 'buzz');
  testFizzBuzz(15, 'fizzbuzz');
  testFizzBuzz(16, '16');
  testFizzBuzz(0, 'fizzbuzz');
}

testAll();