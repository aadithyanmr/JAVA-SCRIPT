function isStrictlyAscending(numbers) {
  for (let index = 0; index < numbers.length - 1; index++) {
    if (numbers[index] >= numbers[index + 1]) {
      return false;
    }
  }

  return true;
}

//testing starts here
const seperator = ' ';

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function printMessage(array, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = 'The  given array "' + array + '"';
  const segment2 = 'is strictly ascending expected "' + expectedResult + '"';
  const segment3 = 'and got "' + result + '"';
  const message = [mark, segment1, segment2, segment3];

  console.log(message.join(seperator));
}

function testIsStrictlyAscending(array, expectedResult) {
  const result = isStrictlyAscending(array);

  return printMessage(array, expectedResult, result);
}

function testAll() {
  testIsStrictlyAscending([1, 2], true);
  testIsStrictlyAscending([1, 1], false);
  testIsStrictlyAscending([2, 1], false);
  testIsStrictlyAscending([1, 4, 3, 5], false);
  testIsStrictlyAscending([1, 2, 3, 4], true);
  testIsStrictlyAscending([1, 1, 1, 1], false);
  testIsStrictlyAscending([1, 2, 2, 3], false);
}

testAll();