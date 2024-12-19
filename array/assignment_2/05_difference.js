function isPresent(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return true;
    }
  }

  return false;
}

function difference(array1, array2) {
  const differenceArray = [];

  for (let index = 0; index < array1.length; index++) {
    if (!isPresent(array2, array1[index])) {
      differenceArray.push(array1[index])
    }
  }

  return differenceArray;
}

//testing starts here
const seperator = ' ';

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function printMessage(array1, array2, expectedResult, result) {
  const isEqual = areEqual(result, expectedResult);
  const mark = getMark(isEqual);

  const segment1 = 'the elements of array1 "' + array1 + '"';
  const segment2 = 'which are not present in "' + array2 + '"';
  const segment3 = 'is "' + expectedResult + '"';
  const segment4 = 'and got "' + result + '"';
  const message = [mark, segment1, segment2, segment3, segment4];

  console.log(message.join(seperator));
}

function testDifference(array1, array2, expectedResult) {
  const result = difference(array1, array2);

  return printMessage(array1, array2, expectedResult, result);
}

function testAll() {
  testDifference([1, 2, 3], [4, 2, 3], [1]);
  testDifference([1], [4, 2, 3, 1], []);
  testDifference([1, 2, 3, 4, 5, 6], [4, 2, 3, 1], [5, 6]);
  testDifference([2], [4, 2, 3], []);
  testDifference([], [4, 2, 3], []);
  testDifference([1, 5, 7, 5], [6, 2, 6, 1], [5, 7, 5]);
  testDifference([], [6, 2, 6, 1], []);
  testDifference([6, 2, 6, 1], [], [6, 2, 6, 1]);
}

testAll();