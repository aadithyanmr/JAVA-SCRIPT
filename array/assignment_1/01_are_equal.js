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

//testing starts here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = 'Are both arrays equal must be "' + expectedResult;
  const segment2 = '" and got "' + result + '"';

  return mark + segment1 + segment2;
}

function testAreEqual(array1, array2, expectedResult) {
  const result = areEqual(array1, array2);

  return getMessage(expectedResult, result);
}

function testAll() {
  console.log(testAreEqual([1, 2, 3], [1, 2, 3], true));
  console.log(testAreEqual(['a', 'b', '3'], ['a', 'b', '3'], true));
  console.log(testAreEqual(['a', 'b', 'c'], ['a', 'b', 'c'], true));
  console.log(testAreEqual([1], [2], false));
  console.log(testAreEqual([1], ['a'], false));
  console.log(testAreEqual([1, 2, 3], [1, 2, 3, 4], false));
  console.log(testAreEqual([1, 2, 3, 4], [1, 2, 3], false));
}

testAll();