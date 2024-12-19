//start
const EMPTYSTRING = '';

function slice(string, from, to) {
  if (from > to) {
    return EMPTYSTRING;
  }

  return string[from] + slice(string, from + 1, to);
}

function convertStringToNumber(string) {
  if (string.length < 1) {
    return 0;
  }

  const newString = slice(string, 1, string.length - 1)
  const multiplier = 10 ** (string.length - 1);

  return string[0] * multiplier + convertStringToNumber(newString);
}

//main function
function stringToNumber(string) {
  if (string[0] === '-') {
    const trimmedString = slice(string, 1, string.length - 1);

    return convertStringToNumber(trimmedString) * (-1);
  }

  return convertStringToNumber(string);
}
//end

//testing start here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(string, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = 'number string "' + string + '" in "' + string + '"';
  const segment2 = ' should be "' + expectedResult;
  const segment3 = '" and got "' + result + '"';

  return mark + segment1 + segment2 + segment3;
}

function testStringToNumber(string, expectedResult) {
  const result = stringToNumber(string);

  return getMessage(string, expectedResult, result);
}

function testAll() {
  console.log(testStringToNumber('123', 123));
  console.log(testStringToNumber('123456', 123456));
  console.log(testStringToNumber('-123456', -123456));
  console.log(testStringToNumber('0', 0));
  console.log(testStringToNumber('-1', -1));
}

testAll();