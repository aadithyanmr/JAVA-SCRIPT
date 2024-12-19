function isMatrix(matrix) {
  for (let index = 1; index < matrix.length; index++) {
    if (matrix[0].length !== matrix[index].length) {
      return false;
    }
  }

  return true;
}

function isValidMatrix(matrixA, matrixB) {
  const isMultipliable = matrixA[0].length === matrixB.length;
  const areMatrices = isMatrix(matrixA) && isMatrix(matrixB);

  return isMultipliable && areMatrices;
}

function getElement(rowIndex, columnIndex, matrixA, matrixB) {
  let sum = 0;

  for (let i = 0; i < matrixA[0].length; i++) {
    sum += matrixA[rowIndex][i] * matrixB[i][columnIndex];
  }

  return sum;
}

function getRow(rowIndex, matrixA, matrixB) {
  const row = [];

  for (let column = 0; column < matrixB[0].length; column++) {
    const element = getElement(rowIndex, column, matrixA, matrixB);
    row.push(element);
  }

  return row;
}

function multiplyMatrices(matrixA, matrixB) {
  if (matrixA.length === 0 || matrixB.length === 0) {
    return [];
  }

  if (!isValidMatrix(matrixA, matrixB)) {
    return NaN;
  }

  const result = [];

  for (let rowIndex = 0; rowIndex < matrixA.length; rowIndex++) {
    const row = getRow(rowIndex, matrixA, matrixB);
    result.push(row);
  }

  return result;
}

//testing starts here
const seperator = '\n';

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    for (let innerIndex = 0; innerIndex < array1[index].length; innerIndex++) {
      if (array1[index][innerIndex] !== array2[index][innerIndex]) {
        return false;
      }
    }
  }

  return true;
}

function printMessage(matrixA, matrixB, expectedResult, result) {
  const isEqual = areEqual(result, expectedResult);
  const mark = getMark(isEqual);

  const segment1 = 'Input1 => "' + matrixA + '"';
  const segment2 = 'Input1 => "' + matrixB + '"';
  const segment3 = 'Expectation => "' + expectedResult + '"';
  // const segment4 = 'Got => "' + result + '"';
  const message = [mark, segment1, segment2, segment3];

  console.log(message.join(seperator) + '\n');
  console.log('Got => ', result);
}

function testMatrixMultiply(matrixA, matrixB, expectedResult) {
  const result = multiplyMatrices(matrixA, matrixB);

  return printMessage(matrixA, matrixB, expectedResult, result);
}

function testNormalCases() {
  testMatrixMultiply([], [], []);
  testMatrixMultiply([[1, 2]], [[1], [2]], [[5]]);
  testMatrixMultiply([[1, 2]], [[1, 2], [1, 2]], [[3, 6]]);
  testMatrixMultiply([[1], [2]], [[1]], [[1], [2]]);
  testMatrixMultiply([[1, 2, 3], [4, 5, 6]], [[7, 8], [9, 10], [11, 12]], [[58, 64], [139, 154]]);
}

function testNaNCases() {
  testMatrixMultiply([[]], [[]], NaN);
  testMatrixMultiply([[1]], [[1], [2]], NaN);
  testMatrixMultiply([[1, 2]], [[1, 2], [1, 2], [1, 2]], NaN);
  testMatrixMultiply([[1, 2, 3]], [[1, 2], [1, 2]], NaN);
}

testNormalCases();
testNaNCases();