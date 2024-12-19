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

function reverse(array) {
  const endIndex = array.length - 1;
  const reverseArray = [];

  for (let index = 0; index < array.length; index++) {
    reverseArray[endIndex - index] = array[index]; 
  }

  return reverseArray;
}

//testing starts here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(array, expectedResult, result) {
  const isEqual = areEqual(result, expectedResult);
  const mark = getMark(isEqual);

  const segment1 = 'The reverse of "' + array + '" is "' + expectedResult;
  const segment2 = '" and got "' + result + '"';

  return mark + segment1 + segment2;
}

function testReverse(array, expectedResult) {
  const result = reverse(array);

  return getMessage(array, expectedResult, result);
}

function testAll() {
  console.log(testReverse([1, 2, 3], [3, 2, 1]));
  console.log(testReverse(['aadi'], ['aadi']));
  console.log(testReverse(['aadi', 'aboo'], ['aboo', 'aadi']));
  console.log(testReverse([1,2], [2,1]));
  console.log(testReverse([], []));
}

testAll();