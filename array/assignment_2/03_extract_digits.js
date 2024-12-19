function convertToPositiveInteger(number) {
  let positiveInteger = Math.abs(number);

  while (Math.floor(positiveInteger) != positiveInteger) {
    positiveInteger = positiveInteger * 10;
  }

  return positiveInteger;
}

function extractDigits(number) {
  let extractingNumber = convertToPositiveInteger(number);
  const extractedArray = [];

  while (extractingNumber > 0) {
    const remainder = extractingNumber % 10;
    extractedArray.unshift(remainder);
    extractingNumber = Math.floor(extractingNumber / 10);
  }

  return extractedArray;
}

//testing starts here
const seperator = ' ';

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

function getMessage(number, expectedResult, result) {
  const isEqual = areEqual(result, expectedResult);
  const mark = getMark(isEqual);

  const segment1 = 'The digits extracted from number "' + number + '" is"';
  const segment2 = expectedResult + '" and got "' + result + '"';
  const message = [mark, segment1, segment2];

  console.log(message.join(seperator));
}

function testExtractDigits(number, expectedResult) {
  const result = extractDigits(number);

  return getMessage(number, expectedResult, result);
}

function testAll() {
  testExtractDigits(123, [1, 2, 3]);
  testExtractDigits(12.3, [1, 2, 3]);
  testExtractDigits(-12.3, [1, 2, 3]);
  testExtractDigits(1, [1]);
  testExtractDigits(101, [1, 0, 1]);
  testExtractDigits(100, [1, 0, 0]);
}

testAll();