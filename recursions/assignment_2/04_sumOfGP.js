//start
function sumOfGP(term, commonRatio, noOfTerms) {
  if (noOfTerms < 1) {
    return 0;
  }

  return term + sumOfGP(term * commonRatio, commonRatio, noOfTerms - 1);
}

//testing starts here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(firstTerm, commonRatio, noOfTerms, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = 'when a = "' + firstTerm + '" r = "' + commonRatio + '"';
  const segment2 = ' n = "' + noOfTerms + '"';
  const segment3 = ' sum of GP should be "' + expectedResult;
  const segment4 = '" and got "' + result + '"';

  return mark + segment1 + segment2 + segment3 + segment4;
}

function testSumOfAP(firstTerm, commonRatio, noOfTerms, expectedResult) {
  const result = sumOfGP(firstTerm, commonRatio, noOfTerms);

  return getMessage(firstTerm, commonRatio, noOfTerms, expectedResult, result);
}

function testAll() {
  console.log(testSumOfAP(1, 1, 0, 0));
  console.log(testSumOfAP(2, 2, 1, 2));
  console.log(testSumOfAP(2, 2, 2, 6));
  console.log(testSumOfAP(2, 2, 3, 14));
  console.log(testSumOfAP(3, 3, 1, 3));
  console.log(testSumOfAP(3, 3, 2, 12));
}

testAll();