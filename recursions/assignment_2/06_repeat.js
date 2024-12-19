//start
function repeat(string, noOfTimes) {
  if (noOfTimes < 1 || string === '') {
    return '';
  }

  return string + repeat(string, noOfTimes - 1);
}
//end

//testing starts here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(string, noOfTimes, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = '"' + string  + '" repeated "' + noOfTimes;
  const segment2 = '" times is "' + expectedResult;
  const segment3 = '" and got "' + result + '"';

  return mark + segment1 + segment2 + segment3;
}

function testSlice(string, noOfTimes, expectedResult) {
  const result = repeat(string, noOfTimes);

  return getMessage(string, noOfTimes, expectedResult, result);
}

function testAll() {
  console.log(testSlice(' Adhithyan ', 1, ' Adhithyan '));
  console.log(testSlice(' Adhithyan ', 0, ''));
  console.log(testSlice('a', 1, 'a'));
  console.log(testSlice('a', 2, 'aa'));
  console.log(testSlice('', 6000, ''));
  console.log(testSlice('a', 3, 'aaa'));
  console.log(testSlice('a', 4, 'aaaa'));
  console.log(testSlice('a', 5, 'aaaaa'));
  console.log(testSlice('a', 6, 'aaaaaa'));
  console.log(testSlice('', 6, ''));
  console.log(testSlice(' ', 6, '      '));
  console.log(testSlice(' ', 6, '      '));
}

testAll();