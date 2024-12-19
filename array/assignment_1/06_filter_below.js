function filterBelow(array, threshold) {
  const filteredArray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] < threshold) {
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

function testFilterBelow(array, threshold, expectedResult) {
  const result = filterBelow(array, threshold);

  return printMessage(array, threshold, expectedResult, result);
}

function testAll() {
  testFilterBelow([1, 2, 3], 2, [1]);
  testFilterBelow([1, 2, 3, 4, 5, 6], 2, [1]);
  testFilterBelow([1, 2, 3, 4, 5, 6], 6, [1,2,3,4,5]);
  testFilterBelow([1], 1, []);
  testFilterBelow([], 1, []);
  testFilterBelow([1,2], 3, [1,2]);
}

testAll();