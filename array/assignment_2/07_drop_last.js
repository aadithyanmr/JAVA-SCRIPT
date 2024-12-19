function dropLast(array, noOfElements) {
  const modifiedArray = [];

  for (let index = 0; index < array.length - noOfElements; index++) {
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

  const segment1 = 'last ' + noOfElements + '" elements removed from';
  const segment2 = 'the array "' + array + '" is "' + expectedResult + '"';
  const segment3 = 'and got "' + result + '"';
  const message = [mark, segment1, segment2, segment3];

  console.log(message.join(seperator));
}

function testDropLast(array, noOfElements, expectedResult) {
  const result = dropLast(array, noOfElements);

  return printMessage(array, noOfElements, expectedResult, result);
}

function testAll() {
  testDropLast([1, 2, 3], 1, [1, 2]);
  testDropLast([1, 2, 3], 2, [1]);
  testDropLast([1, 2, 3], 3, []);
  testDropLast([1, 2, 3], 4, []);
  testDropLast([1, 2, 3], 0, [1, 2, 3]);
}

testAll();