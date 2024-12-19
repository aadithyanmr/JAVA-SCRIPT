function selectOdds(numbers) {
  const arrayOfOdds = [];

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 !== 0) {
      arrayOfOdds[arrayOfOdds.length] = numbers[index];
    }
  }

  return arrayOfOdds;
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

function getMessage(array, expectedResult, result) {
  const isEqual = areEqual(result, expectedResult);
  const mark = getMark(isEqual);

  const segment1 = 'The selectOdds of "' + array + '" is "' + expectedResult;
  const segment2 = '" and got "' + result + '"';

  return mark + segment1 + segment2;
}

function testReverse(array, expectedResult) {
  const result = selectOdds(array);

  return getMessage(array, expectedResult, result);
}

function testAll() {
  console.log(testReverse([1, 2, 3], [1, 3]));
  console.log(testReverse([0], []));
  console.log(testReverse([0, 1, 2, 3], [1, 3]));
  console.log(testReverse([3, 3, 3], [3, 3, 3]));
}

testAll();