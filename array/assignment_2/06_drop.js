function drop(array, noOfElements) {
  const modifiedArray = [];

  for (let index = noOfElements; index < array.length; index++) {
    modifiedArray.push(array[index]);
  }

  return modifiedArray;
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

function printMessage(array, noOfElements, expectedResult, result) {
  const isEqual = areEqual(result, expectedResult);
  const mark = getMark(isEqual);

  const segment1 = 'first "' + noOfElements + '" elements removed from';
  const segment2 = 'the array "' + array + '" is "' + expectedResult + '"';
  const segment3 = 'and got "' + result + '"';
  const message = [mark, segment1, segment2, segment3];

  console.log(message.join(seperator));
}

function testDrop(array, noOfElements, expectedResult) {
  const result = drop(array, noOfElements);

  return printMessage(array, noOfElements, expectedResult, result);
}

function testAll() {
  testDrop([1, 2, 3], 1, [2, 3]);
  testDrop([1, 2, 3], 4, []);
  testDrop([2, 3], 1, [3]);
  testDrop([2, 3], 0, [2, 3]);
}

testAll();