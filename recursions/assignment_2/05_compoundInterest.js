//start
function compoundInterest(principle, rate, time) {
  const interest = (principle * rate) / 100;

  if (time < 1) {
    return 0;
  }

  const newPrinciple = principle + interest;

  return interest + compoundInterest(newPrinciple, rate, time - 1);
}
//end

//testing
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(principle, interest, year, result, expectedResult) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = 'compoundInterest when ' + 'principle is "' + principle;
  const segment2 = '" , rate is "' + interest + '%" , year is "' + year;
  const segment3 = '" should be "' + expectedResult + '" and got "' + result;
  const segment4 = '"';

  return mark + segment1 + segment2 + segment3 + segment4;
}

function testCompoundInterest(principle, interest, year, expectedResult) {
  const result = compoundInterest(principle, interest, year);

  return getMessage(principle, interest, year, result, expectedResult);
}

function testAll() {
  console.log(testCompoundInterest(100, 10, 1, 10));
  console.log(testCompoundInterest(100, 10, 2, 21));
  console.log(testCompoundInterest(100, 10, 3, 33.1));
  console.log(testCompoundInterest(100, 10, 4, 46.41));
  console.log(testCompoundInterest(100, 10, 0, 0));// failing
}

testAll();