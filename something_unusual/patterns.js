const STAR = "*";
const SYMBOLS = [STAR, '-', ' '];

function makeOdd(number) {
  return number % 2 === 0 ? number - 1 : number;
}

function stringify(array, char) {
  const joinedArray = [];

  for (const line of array) {
    joinedArray.push(line.join(''));
  }

  return joinedArray.join(char);
}

function padedStringify(array, char) {
  const joinedArray = [];

  for (const line of array) {
    joinedArray.push((line.join('')).trimEnd());
  }

  return joinedArray.join(char);
}

function getRow(rowLength, pixel) {
  const row = [];

  for (let j = 0; j < rowLength; j++) {
    row.push(pixel);
  }

  return row;
}

function createScreen(width, height, pixel) {
  const screen = [];

  for (let i = 0; i < height; i++) {
    const row = getRow(width, pixel);
    screen.push(row);
  }

  return screen;
}

function put(char, screen, x, y) {
  screen[y][x] = char;
}

function drawHorizontal(char, screen, x1, x2, y) {
  for (let xIndex = x1; xIndex <= x2; xIndex++) {
    put(char, screen, xIndex, y);
  }
}

function drawVertical(char, screen, y1, y2, x) {
  for (let yIndex = y1; yIndex <= y2; yIndex++) {
    put(char, screen, x, yIndex);
  }
}

function drawRightInclinedLine(char, screen, x1, y1, x2) {
  let yIndex = y1;
  for (let xIndex = x1; xIndex <= x2; xIndex++) {
    put(char, screen, xIndex, yIndex);
    yIndex++;
  }
}

function drawLeftInclinedLine(char, screen, x1, y1, x2) {
  let yIndex = y1;
  for (let xIndex = x1; xIndex >= x2; xIndex--) {
    put(char, screen, xIndex, yIndex);
    yIndex++;
  }
}

function drawRectangle(char, screen, x1, y1, x2, y2) {
  drawHorizontal(char, screen, x1, x2, y1);
  drawHorizontal(char, screen, x1, x2, y2);

  drawVertical(char, screen, y1, y2, x1);
  drawVertical(char, screen, y1, y2, x2);
}

function createHollowRectangle(columns, rows, char) {
  const screen = createScreen(columns, rows, ' ');

  drawRectangle(char, screen, 0, 0, columns - 1, rows - 1);

  return screen;
}

function createAlterRectangle(columns, rows, number) {
  const screen = createScreen(columns, rows, ' ');

  for (let row = 0; row < rows; row++) {
    const charIndex = row % number;
    drawHorizontal(SYMBOLS[charIndex], screen, 0, columns - 1, row);
  }

  return screen;
}

function createAlignedTriangle(size, char, pixel) {
  const screen = createScreen(size, size, pixel);
  const endIndex = size - 1;

  for (let line = 0; line < size; line++) {
    drawVertical(char, screen, endIndex - line, endIndex, line);
  }

  return screen;
}

const styles = [
  "hollow-rectangle",
  "filled-rectangle",
  "alternating-rectangle",
  "spaced-alternating-rectangle",
  "triangle",
  "right-aligned-triangle",
  "diamond",
  "hollow-diamond"
];

function generateRectangle(style, dimensions) {
  const numberOfChar = styles.indexOf(style);

  if (numberOfChar === 0) {
    return createHollowRectangle(dimensions[0], dimensions[1], STAR);
  }

  return createAlterRectangle(dimensions[0], dimensions[1], numberOfChar);
}

function generateTriangle(style, dimensions) {
  if (style === "right-aligned-triangle") {
    return createAlignedTriangle(dimensions[0], STAR, ' ');
  }

  return createAlignedTriangle(dimensions[0], STAR, '');
}

function generateDiamond(dimension, char) {
  const size = makeOdd(dimension);
  const screen = [];
  const middleIndex = Math.floor(size / 2);
  let noOfSpaces = Math.floor(size / 2);
  let noOfChars = 1;
  let length = 0;

  for (let lineIndex = 0; lineIndex < size; lineIndex++) {
    length = noOfChars + noOfSpaces;
    screen.push((char.repeat(noOfChars)).padStart(length, ' '));

    noOfSpaces = lineIndex < middleIndex ? noOfSpaces - 1 : noOfSpaces + 1;
    noOfChars = lineIndex < middleIndex ? noOfChars + 2 : noOfChars - 2;
  }

  return screen;
}

// function generateDiamond(dimension, char) {
//   const size = makeOdd(dimension);
//   const screen = createScreen(size, size, ' ')
//   const middleIndex = Math.floor(size / 2);
//   const endIndex = size - 1;

//   for(let lineIndex = middleIndex; lineIndex <= endIndex; lineIndex) {

//     drawLeftInclinedLine(char, screen, middleIndex, 0, 0, middleIndex);
//   }

//   return padedStringify(screen, '\n');
// }

function drawDiamond(char, screen, middleIndex, endIndex) {
  drawRightInclinedLine(char, screen, middleIndex, 0, endIndex);
  drawRightInclinedLine(char, screen, 0, middleIndex, middleIndex);

  drawLeftInclinedLine(char, screen, middleIndex, 0, 0, middleIndex);
  drawLeftInclinedLine(char, screen, endIndex, middleIndex, middleIndex, endIndex);
}

function generateHollowDiamond(dimension, char) {
  const size = makeOdd(dimension);
  const screen = createScreen(size, size, ' ');
  const middleIndex = Math.floor(size / 2);
  const endIndex = size - 1;

  drawDiamond(char, screen, middleIndex, endIndex);

  return padedStringify(screen, '\n');
}

function getPattern(style, dimensions) {
  const noOfDimension = dimensions.length;

  if (style === "diamond") {
    return generateDiamond(dimensions[0], STAR);
  }

  if (style === "hollow-diamond") {
    return generateHollowDiamond(dimensions[0], STAR);
  }

  if (noOfDimension === 1) {
    return generateTriangle(style, dimensions);
  }

  if (noOfDimension === 2) {
    return generateRectangle(style, dimensions);
  }
}

// main function
function generatePattern(style, dimensions, secondStyle) {
  if (dimensions[0] === 0 || dimensions[1] === 0) {
    return '';
  }

  const firstPattern = getPattern(style, dimensions);

  if (style.indexOf(secondStyle) === -1) {
    return firstPattern;
  }

  const secondPattern = getPattern(secondStyle, dimensions);
  
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
  testTriangle(failed);
  testRightAligned(failed);
  testSpaceAlterRectangle(failed);
  testDiamond(failed);
  testHollowDiamond(failed);
  testTwoRectangles(failed);

  console.table(failed);
}

testAll();