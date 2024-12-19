/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno world'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

// start of code
function getNextChar(CharAtIndex, match, replacement) {
  return CharAtIndex === match ? replacement : CharAtIndex;
}

function replace(text, match, replacement) {
  let replacedString = '';

  for (let index = 0; index < text.length; index++) {
    const nextChar = getNextChar(text[index], match, replacement);
    replacedString = replacedString + nextChar;
  }

  return replacedString;
}
// end of code

function getIndicator(isEqual) {
  return isEqual ? "✅" : "❌";
}

function makeMessage(text, match, replacement, expected, result) {
  const indicator = getIndicator(result === expected);
  let givingSegment = "'" + text + "' replaced '" + match;
  givingSegment += "' with '" + replacement;
  const contextSegment = "' expexted to be '" + expected;
  const actualSegment = "' and is '" + result + "'";

  console.log(indicator + givingSegment + contextSegment + actualSegment);
}

function testReplace(text, match, replacement, expected) {
  const result = replace(text, match, replacement);

  makeMessage(text, match, replacement, expected, result)
}

function testAll() {
  testReplace('a', 'a', 'n', 'n');
  testReplace('abc', 'd', 'n', 'abc');
  testReplace('', 'a', 'n', '');
  testReplace('abc', '', 'n', 'abc');
  testReplace('aaaa', 'a', 'b', 'bbbb');
}

testAll();