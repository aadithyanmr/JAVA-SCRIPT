//start
function maximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function minimum(num1, num2) {
  return num1 < num2 ? num1 : num2;
}

function getSlice(string, start, end) {
  if (start > end) {
    return '';
  }

  return string[start] + getSlice(string, start + 1, end);
}
//end

//main function
function slice(string, start, end) {
  const actualStart = maximum(0, start);
  const actualEnd = minimum(string.length - 1, end);

  return getSlice(string, actualStart, actualEnd);
}

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(string, start, end, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = '"' + string  + '" sliced from "' + start;
  const segment2 = '" to "' + end + '"' + ' is "' + expectedResult;
  const segment3 = '" and got "' + result + '"';

  return mark + segment1 + segment2 + segment3;
}

function testSlice(string, start, end, expectedResult) {
  const result = slice(string, start, end);

  return getMessage(string, start, end, expectedResult, result);
}

function testAll() {
  console.log();
  console.log(testSlice('string', 0, 0, 's'));
  console.log(testSlice('string', 1, 2, 'tr'));
  console.log(testSlice('string', -1, 10, 'string'));
  console.log(testSlice('string', 0, 5, 'string'));
  console.log(testSlice('string', 0, 6, 'string'));
  console.log(testSlice('string', -1, 6, 'string'));
  console.log(testSlice('string', 4, 0, ''));
  console.log(testSlice('', 4, 0, ''));
  console.log(testSlice('', -1, 1, ''));
  console.log(testSlice('', 1, 2, ''));
  console.log();
}

testAll();