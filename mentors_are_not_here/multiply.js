function exponentValue(number) {
  if (number < 2) {
    return 0;
  }

  const remaining = number >> 1;

  return 1 + exponentValue(remaining);
}

function multiply(num1, num2) {
  const min = num1 < num2 ? num1 : num2;
  const max = num1 > num2 ? num1 : num2;
  const powerOfTwo = 2 << exponentValue(max) - 1;
  
  if (min === 1) {
    return max;
  }

  if (powerOfTwo === max) {
    return min << exponentValue(max);
  }
  
  return multiply(min, powerOfTwo) + multiply(min, max - powerOfTwo);
}

function printTable(num) {
  for(let i = 1; i <= 10; i++) {
    console.log(num,' * ', i, ' = ',multiply(num, i));
  }
}

printTable(100);