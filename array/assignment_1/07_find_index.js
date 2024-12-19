function findIndex(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return index;
    }
  }

  return -1;
}

//testing starts here
const seperator = '\n';

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function printMessage(array, element, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = 'Input 1 => "' + element + '"';
  const segment2 = 'Input 2 => "' + array + '"';
  const segment3 = 'Hoping for => "' + expectedResult + '"';
  const segment4 = 'Got "' + result + '"';
  const message = [mark, segment1, segment2, segment3, segment4];

  console.log(message.join(seperator));
}

function testFindIndex(array, element, expectedResult) {
  const result = findIndex(array, element);

  return printMessage(array, element, expectedResult, result);
}

function testAll() {
  testFindIndex([1, 2, 3], 2, 1);
  testFindIndex([1, 2, 3, 4, 5, 6], 3, 2);
  testFindIndex([1], 2, -1);
  testFindIndex([1], 1, 0);
  testFindIndex([], 1, -1);
  testFindIndex([1, 2], 1, 0);
}

testAll();