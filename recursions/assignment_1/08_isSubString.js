//start
const EMPTYSTRING = '';

function sliceString(string, from, length) {
  if (length < 1) {
    return EMPTYSTRING;
  }

  return string[from] + sliceString(string, from + 1, length - 1);
}
//main function
function isSubString(string, otherString) {
  const isStringsEmpty = string === EMPTYSTRING || otherString === EMPTYSTRING;

  if (isStringsEmpty) {
    return false;
  }
  
  const slicedString = sliceString(string, 0, otherString.length)
  
  if (slicedString === otherString) {
    return true;
  }

  const endIndex = string.length -1;
  const restOfString = sliceString(string, 1, endIndex);

  return isSubString(restOfString, otherString);
}

// testing starts here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(string, otherString, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = '"' + otherString + '" is a substring of "' + string + '"';
  const segment2 = '" should be "' + expectedResult;
  const segment3 = '" and got "' + result + '"';

  return mark + segment1 + segment2 + segment3;
}

function testIsSubstring(string, otherString, expectedResult) {
  const result = isSubString(string, otherString);

  return getMessage(string, otherString, expectedResult, result);
}

function testAll() {
  console.log(testIsSubstring('aaa', 'a', true));
  console.log(testIsSubstring('this is this', 'is', true));
  console.log(testIsSubstring('this', 'the', false));
  console.log(testIsSubstring('aaaa', 'b', false));
  console.log(testIsSubstring('aaaa', '', false));
  console.log(testIsSubstring('abcdef', 'ef', true));
  console.log(testIsSubstring('aaka', 'ak', true));
  console.log(testIsSubstring('askshay', 'shy', false));
}

testAll();