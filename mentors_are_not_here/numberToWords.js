const HUNDRED = 'hundred';

const powersOfThousands = [
  '', ' thousand', ' million', ' billion'
];

const multiplesOfTen = [
  "ten", "twenty", "thirty", "forty", "fifty",
  "sixty", "seventy", "eighty", "ninety"
];

const underTwenty = [
  "", "one", "two",
  "three", "four", "five",
  "six", "seven", "eight",
  "nine", "ten", "eleven",
  "twelve", "thirteen", "fourteen",
  "fifteen", "sixteen", "seventeen",
  "eighteen", "nineteen"
];

function concatWithSpace(string1, string2) {
  return string1 + ' ' + string2;
}

function underHundred(number) {
  if (number < 20) {
    return underTwenty[number];
  }

  const msd = Math.floor(number / 10);
  const msdAndPlaceWord = multiplesOfTen[msd - 1];
  const onesDigit = number % 10;

  if (onesDigit === 0) {
    return msdAndPlaceWord;
  }

  return concatWithSpace(msdAndPlaceWord, underTwenty[onesDigit]);
}

function underThousand(number) {
  if (number < 100) {
    return underHundred(number);
  }

  const msd = Math.floor(number / 100);
  const msdAndPlaceWord = underTwenty[msd] + ' ' + HUNDRED;
  const lastTwoDigit = number % 100;

  if (lastTwoDigit === 0) {
    return msdAndPlaceWord;
  }

  return concatWithSpace(msdAndPlaceWord, underHundred(lastTwoDigit));
}

function convertNumberToWords(number, index) {
  if (index > powersOfThousands.length || number === 0) {
    return '';
  }

  const lastThreeDigits = number % 1000;
  let digitInWords = underThousand(lastThreeDigits);

  if (digitInWords !== '') {
    digitInWords += powersOfThousands[index];
  }

  const restOfDigits = Math.floor(number / 1000);
  const nextDigitInWords = convertNumberToWords(restOfDigits, index + 1);

  return concatWithSpace(nextDigitInWords, digitInWords);
}

function numberToWords(number) {
  if (number === 0) {
    return 'zero';
  }

  return convertNumberToWords(number, 0).trim();
}

//testing starts here
let passing = 0;
let testCases = 0;

const seperator = '\n';

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function printMessage(number, expectedResult, result) {
  const isEqual = result === expectedResult;
  testCases++;

  if (isEqual) {
    passing++;
  }

  const mark = getMark(isEqual);
  const segment1 = 'Input => "' + number + '"';
  const segment2 = 'Expectation => "' + expectedResult + '"';
  const segment3 = 'Got => "' + result + '"';
  const message = [mark, segment1, segment2, segment3];

  console.log(message.join(seperator) + '\n');
}

function testNumberToWords(number, expectedResult) {
  const result = numberToWords(number);

  return printMessage(number, expectedResult, result);
}

function printPassingStatus() {
  console.log('\ntestcases => ', testCases);
  console.log('passing => ', passing);
  const passingMessage = 'ALL TESTS PASSING ✅';
  const failingMessage = 'SOMETHING IS FAILING ❌';
  console.log(testCases === passing ? passingMessage : failingMessage);
}

function testOneDigit() {
  testNumberToWords(0, 'zero');
  testNumberToWords(1, 'one');
  testNumberToWords(2, 'two');
  testNumberToWords(3, 'three');
  testNumberToWords(4, 'four');
  testNumberToWords(5, 'five');
  testNumberToWords(6, 'six');
  testNumberToWords(7, 'seven');
  testNumberToWords(8, 'eight');
  testNumberToWords(9, 'nine');
}

function testTwoDigit() {
  testNumberToWords(10, 'ten');
  testNumberToWords(11, 'eleven');
  testNumberToWords(12, 'twelve');
  testNumberToWords(13, 'thirteen');
  testNumberToWords(14, 'fourteen');
  testNumberToWords(15, 'fifteen');
  testNumberToWords(16, 'sixteen');
  testNumberToWords(17, 'seventeen');
  testNumberToWords(18, 'eighteen');
  testNumberToWords(19, 'nineteen');
  testNumberToWords(20, 'twenty');
  testNumberToWords(30, 'thirty');
  testNumberToWords(40, 'forty');
  testNumberToWords(50, 'fifty');
  testNumberToWords(60, 'sixty');
  testNumberToWords(70, 'seventy');
  testNumberToWords(80, 'eighty');
  testNumberToWords(90, 'ninety');
  testNumberToWords(21, 'twenty one');
  testNumberToWords(31, 'thirty one');
  testNumberToWords(41, 'forty one');
  testNumberToWords(99, 'ninety nine');
}

function testThreeDigit() {
  testNumberToWords(100, 'one hundred');
  testNumberToWords(200, 'two hundred');
  testNumberToWords(300, 'three hundred');
  testNumberToWords(400, 'four hundred');
  testNumberToWords(500, 'five hundred');
  testNumberToWords(600, 'six hundred');
  testNumberToWords(700, 'seven hundred');
  testNumberToWords(800, 'eight hundred');
  testNumberToWords(900, 'nine hundred');
  testNumberToWords(101, 'one hundred one');
  testNumberToWords(110, 'one hundred ten');
  testNumberToWords(111, 'one hundred eleven');
  testNumberToWords(200, 'two hundred');
  testNumberToWords(220, 'two hundred twenty');
  testNumberToWords(290, 'two hundred ninety');
  testNumberToWords(299, 'two hundred ninety nine');
  testNumberToWords(999, 'nine hundred ninety nine');
}

function testThousand() {
  testNumberToWords(1000, 'one thousand');
  testNumberToWords(2000, 'two thousand');
  testNumberToWords(3000, 'three thousand');
  testNumberToWords(4000, 'four thousand');
  testNumberToWords(5000, 'five thousand');
  testNumberToWords(6000, 'six thousand');
  testNumberToWords(7000, 'seven thousand');
  testNumberToWords(8000, 'eight thousand');
  testNumberToWords(9000, 'nine thousand');
  testNumberToWords(10000, 'ten thousand');
  testNumberToWords(11000, 'eleven thousand');
  testNumberToWords(12000, 'twelve thousand');
  testNumberToWords(13000, 'thirteen thousand');
  testNumberToWords(14000, 'fourteen thousand');
  testNumberToWords(15000, 'fifteen thousand');
  testNumberToWords(16000, 'sixteen thousand');
  testNumberToWords(17000, 'seventeen thousand');
  testNumberToWords(18000, 'eighteen thousand');
  testNumberToWords(19000, 'nineteen thousand');
  testNumberToWords(20000, 'twenty thousand');
  testNumberToWords(21000, 'twenty one thousand');
  testNumberToWords(100000, 'one hundred thousand');
  testNumberToWords(200000, 'two hundred thousand');
  testNumberToWords(1101, 'one thousand one hundred one');
  testNumberToWords(1001, 'one thousand one');
  testNumberToWords(1111, 'one thousand one hundred eleven');
  testNumberToWords(11111, 'eleven thousand one hundred eleven');
  testNumberToWords(111111, 'one hundred eleven thousand one hundred eleven');
}

function testMillion() {
  testNumberToWords(1000000, 'one million');
  testNumberToWords(2000000, 'two million');
  testNumberToWords(3000000, 'three million');
  testNumberToWords(4000000, 'four million');
  testNumberToWords(5000000, 'five million');
  testNumberToWords(6000000, 'six million');
  testNumberToWords(7000000, 'seven million');
  testNumberToWords(8000000, 'eight million');
  testNumberToWords(9000000, 'nine million');
  // testNumberToWords(10000, 'ten thousand');
  // testNumberToWords(11000, 'eleven thousand');
  // testNumberToWords(12000, 'twelve thousand');
  // testNumberToWords(13000, 'thirteen thousand');
  // testNumberToWords(14000, 'fourteen thousand');
  // testNumberToWords(15000, 'fifteen thousand');
  // testNumberToWords(16000, 'sixteen thousand');
  // testNumberToWords(17000, 'seventeen thousand');
  // testNumberToWords(18000, 'eighteen thousand');
  // testNumberToWords(19000, 'nineteen thousand');
  // testNumberToWords(20000, 'twenty thousand');
  // testNumberToWords(21000, 'twenty one thousand');
  // testNumberToWords(100000, 'one hundred thousand');
  // testNumberToWords(200000, 'two hundred thousand');
  testNumberToWords(1000000, 'one million');
  testNumberToWords(10000000, 'ten million');
  testNumberToWords(1111111, 'one million one hundred eleven thousand one hundred eleven');
  testNumberToWords(11111111, 'eleven million one hundred eleven thousand one hundred eleven');
  testNumberToWords(999999999, 'nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine');
  testNumberToWords(99999999, 'ninety nine million nine hundred ninety nine thousand nine hundred ninety nine');
}

function testBillion() {
  testNumberToWords(1000000000, 'one billion');
  testNumberToWords(10000000000, 'ten billion');
  testNumberToWords(100000000000, 'one hundred billion');
  testNumberToWords(999999999999, "nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine");
}

// testOneDigit();
// testTwoDigit();
// testThreeDigit();
// testThousand();
testMillion();
// testBillion();

printPassingStatus();