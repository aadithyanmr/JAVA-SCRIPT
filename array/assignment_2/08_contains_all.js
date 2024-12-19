function isPresent(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return true;
    }
  }

  return false;
}

function containsAll(array, elements) {
  for (let index = 0; index < elements.length; index++) {
    if (!isPresent(array, elements[index])) {
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

function printMessage(array, elements, expectedResult, result) {
  const isEqual = areEqual(result, expectedResult);
  const mark = getMark(isEqual);

  const segment1 = 'all the elements "' + elements + '"';
  const segment2 = 'are present in  "' + array + '" regardless of their order';
  const segment3 = 'is "' + expectedResult + '"';
  const segment4 = 'and got "' + result + '"';
  const message = [mark, segment1, segment2, segment3, segment4];

  console.log(message.join(seperator));
}

function testContainsAll(array, elements, expectedResult) {
  const result = containsAll(array, elements);

  return printMessage(array, elements, expectedResult, result);
}

function testAll() {
  testContainsAll([1, 2, 3], [2, 3], true);
  testContainsAll([1, 2], [2, 3], false);
  testContainsAll([], [], true);
  testContainsAll([], [1], false);
  testContainsAll([1], [], true);
  testContainsAll([3, 2, 1], [1, 3], true);
  testContainsAll([0], [0, 0], true);
}

testAll();