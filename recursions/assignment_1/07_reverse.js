//start
const EMPTYSTRING = '';

function trimString(string, from, to) {
  if (from > to) {
    return EMPTYSTRING;
  }

  return string[from] + trimString(string, from + 1, to);
}

//main function
function reverse(string) {
  if (string === EMPTYSTRING) {
    return string;
  }

  const endIndex = string.length - 1;
  const remainingString = trimString(string, 1, endIndex);

  return reverse(remainingString) + string[0];
}
//end

// testing starts here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(string, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = ' reverse of "' + string;
  const segment2 = '" should be "' + expectedResult;
  const segment3 = '" and got "' + result + '"';

  return mark + segment1 + segment2 + segment3;
}

function testReverseOfString(string, expectedResult) {
  const result = reverse(string);

  return getMessage(string, expectedResult, result);
}

function testAll() {
  console.log(testReverseOfString('the', 'eht'));
  console.log(testReverseOfString('reverse', 'esrever'));
  console.log(testReverseOfString('abcd', 'dcba'));
  console.log(testReverseOfString('12345678', '87654321'));
  console.log(testReverseOfString('', ''));
  console.log(testReverseOfString('   ', '   '));
}

testAll();