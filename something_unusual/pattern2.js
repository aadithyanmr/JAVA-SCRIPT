const STAR = '*';
const SPACE = ' ';
const HYPHEN = '-';
const CHARS = [STAR, HYPHEN, SPACE];

function range(from, to, step) {
  const array = [];

  for (let number = from; number < to; number += step) {
    array.push(number);
  }

  return array;
}

function isDimensionLessThanOne([columns, rows]) {
  return columns < 1 || rows < 1;
}

function lineOfChar(char, length) {
  return char.repeat(length);
}

function hollowLine(char, length) {
  return char + lineOfChar(SPACE, length - 2) + char;
}

const hollowRectangle = function ([columns, rows], char) {
  const hollowRectangle = [];

  if (columns < 3 || rows < 3) {
    return alterRectangle([columns, rows], 1);
  }

  for (let row of range(0, rows - 2, 1)) {
    hollowRectangle[row] = (hollowLine(char, columns));
  }

  hollowRectangle.push(lineOfChar(char, columns));
  hollowRectangle.unshift(lineOfChar(char, columns));

  return hollowRectangle.join('\n');
}

const alterRectangle = function ([columns, rows], noOfChars) {
  const alterRectangle = [];

  for (const row of range(0, rows, 1)) {
    alterRectangle[row] = (lineOfChar(CHARS[row % noOfChars], columns));
  }

  return alterRectangle.join('\n');
}

function triangle = triangle(size) {
  
}

const triangleStyles = ['triangle', 'right-aligned-triangle'];
const triangleFunctions = [triangle, rightAlignedTriangle]

const triangles = function (style, size) {
  const styleIndex = triangleStyles.indexOf(style);
  
  return triangleFunctions[styleIndex](size);
}

const rectangleStyles = [
  'hollow-rectangle',
  'filled-rectangle',
  'alternating-rectangle',
  'spaced-alternating-rectangle'
];

const rectangleFunctions = function (index) {
  return index === 0 ? hollowRectangle : alterRectangle;
}

const rectangles = function (style, dimensions) {
  const styleIndex = rectangleStyles.indexOf(style);

  if (style === 'hollow-rectangle') {
    return hollowRectangle(dimensions, STAR);
  }

  if (styleIndex !== -1) {
    return rectangleFunctions(styleIndex)(dimensions, styleIndex);
  }
}

const generatePattern = function (style, dimensions) {
  if (isDimensionLessThanOne(dimensions)) {
    return '';
  }

  if (style.includes(style)) {
    return rectangles(style, dimensions);
  }

  if (style.includes('triangle')) {
    return testTriangle(style, dimensions);
  }
}

//testing starts here
function testGeneratePattern(style, dimensions, expected, failed, secondStyle) {
  const actual = generatePattern(style, dimensions);

  if (actual !== expected) {
    failed.push([style, secondStyle, dimensions, actual, expected]);
  }
}

function testFilledRectangle(failed) {
  testGeneratePattern('filled-rectangle', [0, 0], '', failed);
  testGeneratePattern('filled-rectangle', [1, 0], '', failed);
  testGeneratePattern('filled-rectangle', [3, 0], '', failed);
  testGeneratePattern('filled-rectangle', [0, 1], '', failed);
  testGeneratePattern('filled-rectangle', [0, 3], '', failed);
  testGeneratePattern('filled-rectangle', [1, 1], '*', failed);
  testGeneratePattern('filled-rectangle', [2, 2], '**\n**', failed);
  testGeneratePattern('filled-rectangle', [3, 2], '***\n***', failed);
  testGeneratePattern('filled-rectangle', [3, 3], '***\n***\n***', failed);
}

function testHollowRectangle(failed) {
  testGeneratePattern('hollow-rectangle', [0, 0], '', failed);
  testGeneratePattern('hollow-rectangle', [1, 0], '', failed);
  testGeneratePattern('hollow-rectangle', [0, 1], '', failed);
  testGeneratePattern('hollow-rectangle', [1, 1], '*', failed);
  testGeneratePattern('hollow-rectangle', [2, 1], '**', failed);
  testGeneratePattern('hollow-rectangle', [2, 2], '**\n**', failed);
  testGeneratePattern('hollow-rectangle', [4, 3], '****\n*  *\n****', failed);
  testGeneratePattern('hollow-rectangle', [4, 4], '****\n*  *\n*  *\n****', failed);
  testGeneratePattern('hollow-rectangle', [5, 4], '*****\n*   *\n*   *\n*****', failed);
}

function testAlternatingRectangle(failed) {
  testGeneratePattern('alternating-rectangle', [0, 0], '', failed);
  testGeneratePattern('alternating-rectangle', [1, 0], '', failed);
  testGeneratePattern('alternating-rectangle', [0, 1], '', failed);
  testGeneratePattern('alternating-rectangle', [1, 1], '*', failed);
  testGeneratePattern('alternating-rectangle', [2, 1], '**', failed);
  testGeneratePattern('alternating-rectangle', [2, 2], '**\n--', failed);
  testGeneratePattern('alternating-rectangle', [2, 3], '**\n--\n**', failed);
}

function testTriangle(failed) {
  testGeneratePattern('triangle', [0], '', failed);
  testGeneratePattern('triangle', [1], '*', failed);
  testGeneratePattern('triangle', [2], '*\n**', failed);
  testGeneratePattern('triangle', [3], '*\n**\n***', failed);
  testGeneratePattern('triangle', [4], '*\n**\n***\n****', failed);
}

function testRightAligned(failed) {
  testGeneratePattern('right-aligned-triangle', [0], '', failed);
  testGeneratePattern('right-aligned-triangle', [1], '*', failed);
  testGeneratePattern('right-aligned-triangle', [2], ' *\n**', failed);
  testGeneratePattern('right-aligned-triangle', [3], '  *\n **\n***', failed);
  testGeneratePattern('right-aligned-triangle', [4], '   *\n  **\n ***\n****', failed);
}

function testSpaceAlterRectangle(failed) {
  testGeneratePattern('spaced-alternating-rectangle', [0, 0], '', failed);
  testGeneratePattern('spaced-alternating-rectangle', [1, 0], '', failed);
  testGeneratePattern('spaced-alternating-rectangle', [0, 1], '', failed);
  testGeneratePattern('spaced-alternating-rectangle', [1, 1], '*', failed);
  testGeneratePattern('spaced-alternating-rectangle', [1, 2], '*\n-', failed);
  testGeneratePattern('spaced-alternating-rectangle', [1, 3], '*\n-\n ', failed);
  testGeneratePattern('spaced-alternating-rectangle', [3, 2], '***\n---', failed);
  testGeneratePattern('spaced-alternating-rectangle', [3, 3], '***\n---\n   ', failed);
  testGeneratePattern('spaced-alternating-rectangle', [3, 4], '***\n---\n   \n***', failed);
}

function testDiamond(failed) {
  testGeneratePattern('diamond', [0], '', failed);
  testGeneratePattern('diamond', [1], '*', failed);
  testGeneratePattern('diamond', [2], '*', failed);
  testGeneratePattern('diamond', [3], ' *\n***\n *', failed);
  testGeneratePattern('diamond', [4], ' *\n***\n *', failed);
  testGeneratePattern('diamond', [5], '  *\n ***\n*****\n ***\n  *', failed);
  testGeneratePattern('diamond', [7], '   *\n  ***\n *****\n*******\n *****\n  ***\n   *', failed);
}

function testHollowDiamond(failed) {
  testGeneratePattern('hollow-diamond', [0], '', failed);
  testGeneratePattern('hollow-diamond', [1], '*', failed);
  testGeneratePattern('hollow-diamond', [2], '*', failed);
  testGeneratePattern('hollow-diamond', [3], ' *\n* *\n *', failed);
  testGeneratePattern('hollow-diamond', [4], ' *\n* *\n *', failed);
  testGeneratePattern('hollow-diamond', [5], '  *\n * *\n*   *\n * *\n  *', failed);
  testGeneratePattern('hollow-diamond', [7], '   *\n  * *\n *   *\n*     *\n *   *\n  * *\n   *', failed);
}

function testTwoRectangles(failed) {
  testGeneratePattern('filled-rectangle', [3, 3], '*** ***\n*** * *\n*** ***', failed, 'hollow-rectangle');
}

function testAll() {
  const failed = [];

  testFilledRectangle(failed);
  testHollowRectangle(failed);
  testAlternatingRectangle(failed);
  // testTriangle(failed);
  // testRightAligned(failed);
  testSpaceAlterRectangle(failed);
  // testDiamond(failed);
  // testHollowDiamond(failed);
  // testTwoRectangles(failed);

  console.table(failed);
}

testAll();