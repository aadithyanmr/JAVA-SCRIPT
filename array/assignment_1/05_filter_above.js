function filterAbove(array, threshold) {
  const filteredArray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] > threshold) {
      filteredArray[filteredArray.length] = array[index];
    }
  }

  return filteredArray;
}

//testing starts here
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

function printMessage(array, threshold, expectedResult, result) {
  const isEqual = areEqual(result, expectedResult);
  const mark = getMark(isEqual);

  const segment1 = 'The numbers above the threshold value "' + threshold;
  const segment2 = '" in "' + array + '" is "' + expectedResult + '"';
  const segment3 = ' and got "' + result + '"';

  console.log(mark + segment1 + segment2 + segment3);
}

function testFilterAbove(array, threshold, expectedResult) {
  const result = filterAbove(array, threshold);

  return printMessage(array, threshold, expectedResult, result);
}

function testAll() {
  testFilterAbove([1, 2, 3], 2, [3]);
  testFilterAbove([1, 2, 3, 4, 5, 6], 2, [3, 4, 5, 6]);
  testFilterAbove([1, 2, 3, 4, 5, 6], 7, []);
  testFilterAbove([1], 1, []);
  testFilterAbove([], 1, []);
}

testAll();