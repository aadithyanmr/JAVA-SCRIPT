function getCopyOfArray(array) {
  const arrayCopy = [];

  for (let index = 0; index < array.length; index++) {
    arrayCopy.push(array[index]);
  }

  return arrayCopy;
}

function concat(array1, array2) {
  const concatArray = getCopyOfArray(array1);

  for (let index = 0; index < array2.length; index++) {
    concatArray.push(array2[index]);
  }

  return concatArray;
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

  const segment1 = 'The concat array of "' + array1 + '" and "' + array2;
  const segment2 = '" is "' + expectedResult + '"';
  const segment3 = ' and got "' + result + '"';
  const message = [mark, segment1, segment2, segment3];

  console.log(message.join(seperator));
}

function testConcat(array1, array2, expectedResult) {
  const result = concat(array1, array2);

  return printMessage(array1, array2, expectedResult, result);
}

function testAll() {
  testConcat([1, 2, 3], [1, 2, 3], [1, 2, 3, 1, 2, 3]);
  testConcat([1], [1], [1, 1]);
  testConcat(['a'], ['b'], ['a', 'b']);
  testConcat([], ['b'], ['b']);
  testConcat([], [], []);
}

testAll();