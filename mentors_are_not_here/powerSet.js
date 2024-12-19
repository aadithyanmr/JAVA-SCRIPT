function addElement(powerSet, element) {
  const array = [];

  for (let index = 0; index < powerSet.length; index++) {
    array.push(powerSet[index].concat([element]));
  }

  return array;
}

function numberToWords(array) {
  let powerSet = [[]];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const newSubset = addElement(powerSet, element)
    powerSet = powerSet.concat(newSubset)
  }

  return powerSet;
}

//testing starts here
const seperator = '\n';

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    for (let innerIndex = 0; innerIndex < array1[index].length; innerIndex++) {
      if (array1[index][innerIndex] !== array2[index][innerIndex]) {
        return false;
      }
    }
  }

  return true;
}

function printMessage(array, expectedResult, result) {
  const isEqual = areEqual(result, expectedResult);
  const mark = getMark(isEqual);

  const segment1 = 'Input => "' + array + '"';
  const segment2 = 'Expectation => "' + expectedResult + '"';
  const segment3 = 'Got => "' + result + '"';
  const message = [mark, segment1, segment2, segment3];

  console.log(message.join(seperator) + '\n');
}

function testNumberToWords(array, expectedResult) {
  const result = numberToWords(array);

  return printMessage(array, expectedResult, result);
}

function testAll() {
  testNumberToWords([], [[]]);
  testNumberToWords([1], [[], [1]]);
  testNumberToWords([1, 2], [[], [1], [2], [1, 2]]);
  testNumberToWords([1, 2, 3], [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])
  testNumberToWords([1, 2, 3, 4], [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3], [4], [1, 4], [2, 4], [1, 2, 4], [3, 4], [1, 3, 4], [2, 3, 4], [1, 2, 3, 4]])
  testNumberToWords(['a', 'b'], [[], ['a'], ['b'], ['a', 'b']])
}

testAll();