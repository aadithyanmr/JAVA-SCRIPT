function mapLengths(words) {
  const arrayOfLength = [];

  for (let index = 0; index < words.length; index++) {
    const lengthOfWord = words[index].length;
    arrayOfLength[index] = lengthOfWord;
  }

  return arrayOfLength;
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

  const segment1 = 'array containing the length of words in  "' + array
  const segment2 = '" is "' + expectedResult + '" and got "' + result + '"';

  return mark + segment1 + segment2;
}

function testMapLength(array, expectedResult) {
  const result = mapLengths(array);

  return getMessage(array, expectedResult, result);
}

function testAll() {
  console.log(testMapLength(["apple", "cat", "Four"], [5, 3, 4]));
  console.log(testMapLength(["", "123", "1234"], [0, 3, 4]));
  console.log(testMapLength(["", "", ""], [0, 0, 0]));
  console.log(testMapLength([""], [0]));
  console.log(testMapLength([], []));
  console.log(testMapLength(['123'], [3]));
}

testAll();