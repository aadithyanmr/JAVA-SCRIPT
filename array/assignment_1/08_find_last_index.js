function findLastIndex(array, element) {
  for (let index = array.length - 1; index >= 0; index--) {
    if (array[index] === element) {
      return index;
    }
  }

  return -1;
}

//testing starts here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function printMessage(array, element, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = 'The  last index of "' + element;
  const segment2 = '" in "' + array + '" is "' + expectedResult + '"';
  const segment3 = ' and got "' + result + '"';

  console.log(mark + segment1 + segment2 + segment3);
}

function testFindLastIndex(array, element, expectedResult) {
  const result = findLastIndex(array, element);

  return printMessage(array, element, expectedResult, result);
}

function testAll() {
  testFindLastIndex([1, 2, 3, 4, 3], 3, 4);
  testFindLastIndex([1, 2, 3, 4], 3, 2);
  testFindLastIndex([1], 2, -1);
  testFindLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], 2, -1);
  testFindLastIndex([1, 1, 1, 1], 1, 3);
  testFindLastIndex([], 1, -1);
  testFindLastIndex([1, 2], 3, -1);
}

testAll();