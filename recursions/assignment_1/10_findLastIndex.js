//start
function getLastIndexOfChar(string, char, index) {
  if (index < 0) {
    return -1;
  }

  if (string[index] === char) {
    return index;
  }

  return getLastIndexOfChar(string, char, index - 1);
}

function findLastIndex(string, char) {
  return getLastIndexOfChar(string, char, string.length - 1);
}

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(string, char, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = 'the index of "' + char + '" in "' + string + '"';
  const segment2 = ' should be "' + expectedResult;
  const segment3 = '" and got "' + result + '"';

  return mark + segment1 + segment2 + segment3;
}

function testFindLastIndex(string, char, expectedResult) {
  const result = findLastIndex(string, char);

  return getMessage(string, char, expectedResult, result);
}

function testAll() {
  console.log(testFindLastIndex('aaa', 'a', 2));
  console.log(testFindLastIndex('aaa', '', -1));
  console.log(testFindLastIndex('aaabbbccc', 'a', 2));
  console.log(testFindLastIndex('aaabbbccc', 'b', 5));
  console.log(testFindLastIndex('aaabbbccc', 'c', 8));
  console.log(testFindLastIndex('aaabbbccc', 'h', -1));
  console.log(testFindLastIndex('kshay', 'k', 0));
}

testAll();