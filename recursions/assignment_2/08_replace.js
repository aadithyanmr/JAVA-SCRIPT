//start
function slice(string, start, end) {
  if (start > end) {
    return '';
  }

  return string[start] + slice(string, start + 1, end);
}

function replace(text, target, replacement) {
  if (text.length < 1) {
    return '';
  }

  const firstChar = text[0];
  const char = firstChar === target ? replacement : firstChar;
  const restOfText = slice(text, 1, text.length - 1);

  return char + replace(restOfText, target, replacement);
}
//end

//testing starts here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(text, target, replacement, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = 'in "' + text + '" all "' + target;
  const segment2 = '" replaced with "' + replacement + '"';
  const segment3 = ' is "' + expectedResult;
  const segment4 = '" and got "' + result + '"';

  return mark + segment1 + segment2 + segment3 + segment4;
}

function testreplace(text, target, replacement, expectedResult) {
  const result = replace(text, target, replacement);

  return getMessage(text, target, replacement, expectedResult, result);
}

function testAll() {
  console.log(testreplace('string', 'i', 'a', 'strang'));
  console.log(testreplace('string', 's', 'a', 'atring'));
  console.log(testreplace('string', 'g', 'n', 'strinn'));
  console.log(testreplace('sssss', 's', 'a', 'aaaaa'));
  console.log(testreplace('    ', ' ', 'a', 'aaaa'));
  console.log(testreplace('aaaaa', 'a', ' ', '     '));
}

testAll();