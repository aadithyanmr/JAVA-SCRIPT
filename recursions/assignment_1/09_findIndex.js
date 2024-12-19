//string
function getfirstIndexOfChar(string, char, from) {
  if (from === string.length) {
    return -1;
  }

  if (string[from] === char) {
    return from;
  }

  return getfirstIndexOfChar(string, char, from + 1);
}

function findIndex(string, char) {
 return getfirstIndexOfChar(string, char, 0);
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

function testFindIndex(string, char, expectedResult) {
  const result = findIndex(string, char);

  return getMessage(string, char, expectedResult, result);
}

function testAll() {
  console.log(testFindIndex('aaa', 'a', 0));
  console.log(testFindIndex('aaa', '', -1));
  console.log(testFindIndex('aaabbbccc', 'a', 0));
  console.log(testFindIndex('aaabbbccc', 'b', 3));
  console.log(testFindIndex('aaabbbccc', 'c', 6));
  console.log(testFindIndex('aaabbbccc', 'h', -1));
}

testAll();