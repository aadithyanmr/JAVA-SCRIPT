//start
function sumOfAP(term, difference, noOfTerms) {
  if (noOfTerms < 1) {
    return 0;
  }

  return term + sumOfAP(term + difference, difference, noOfTerms - 1);
}

//testing starts here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(firstTerm, difference, noOfTerms, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = 'when a = "' + firstTerm + '" d = "' + difference + '"';
  const segment2 = ' n = "' + noOfTerms + '"';
  const segment3 = ' sum of AP should be "' + expectedResult;
  const segment4 = '" and got "' + result + '"';

  return mark + segment1 + segment2 + segment3 + segment4;
}

function testSumOfAP(firstTerm, difference, noOfTerms, expectedResult) {
  const result = sumOfAP(firstTerm, difference, noOfTerms);

  return getMessage(firstTerm, difference, noOfTerms, expectedResult, result);
}

function testAll() {
  console.log(testSumOfAP(1, 1, 0, 0));
  console.log(testSumOfAP(1, 1, 1, 1));
  console.log(testSumOfAP(1, 1, 2, 3));
  console.log(testSumOfAP(1, 1, 3, 6));
  console.log(testSumOfAP(2, 1, 3, 9));
  console.log(testSumOfAP(0, 1, 3, 3));
}

testAll();