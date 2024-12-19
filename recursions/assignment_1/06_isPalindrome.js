//start
const EMPTYSTRING = '';

function trimString(string, from, to) {
  if (from > to) {
    return EMPTYSTRING;
  }

  return string[from] + trimString(string, from + 1, to);
}

//main function
function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  }

  const endIndex = string.length - 1;

  if (string[0] !== string[endIndex]) {
    return false;
  }

  const trimmedString = trimString(string, 1, endIndex - 1);

  return isPalindrome(trimmedString);
}

//testing starts here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(string, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = ' reverse of "' + string;
  const segment2 = '" should be "' + expectedResult;
  const segment3 = '" and got "' + result + '"';

  return mark + segment1 + segment2 + segment3;
}

function testIsPalindrome(palindromeCandidate, expectedResult) {
  const result = isPalindrome(palindromeCandidate);

  return getMessage(palindromeCandidate, expectedResult, result);
}

function testAll() {
  console.log(testIsPalindrome('a', true));
  console.log(testIsPalindrome('', true));
  console.log(testIsPalindrome('aba', true));
  console.log(testIsPalindrome('123454321', true));
  console.log(testIsPalindrome('12345432', false));
  console.log(testIsPalindrome('1221', true));
  console.log(testIsPalindrome('11', true));
  console.log(testIsPalindrome('   ', true));
}

testAll();
