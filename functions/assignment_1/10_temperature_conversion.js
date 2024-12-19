/*
  Write a function that converts temperature from one unit to another

  Function takes three arguments: `from`, `to`, `value`
  
  `from` and `to` can have following values:
    - C
    - F
    - K

  Here C means Celsius, K is Kelvin and F is Fahrenheit

  Examples:
    convert('C', 'K', 0) => 273.15
    convert('C', 'F', 37) => 98.6
    convert('F', 'K', 98.6) => 310.15
    convert('F', 'C', -40) => -40
    convert('K', 'C', 100) => -173.15
    convert('K', 'F', 100) => -279.67

  Here are the conversion formulae in case you wonder how it is done :)
    - F to C:
      (F − 32) × 5/9 = C
    - K to C:
      K − 273.15 = C

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
  */

const KELVIN = 'K';
const CELCIUS = 'C';
const FAHRENHEIT = 'F';

function isValidFormat(format) {
  if (format === 'K' || format === 'C' || format === 'F') {
    return true;
  }
}

function celciusToKelvin(value) {
  return +value + 273.15;
}

function kelvinToCelsius(value) {
  return value - 273.15;
}

function celsiusToFahrenheit(value) {
  return (value * 9) / 5 + 32;
}

function fahrenheitToCelsius(value) {
  return (value - 32) * 5 / 9;
}

function convertFromCelsius(to, value) {
  if (to === KELVIN) {
    return celciusToKelvin(value);
  }

  if (to === FAHRENHEIT) {
    return celsiusToFahrenheit(value);
  }
}

function convertFromFahrenheit(to, value) {
  const valueInCelsius = fahrenheitToCelsius(value);

  if (to === CELCIUS) {
    return valueInCelsius;
  }

  if (to === KELVIN) {
    return celciusToKelvin(valueInCelsius);
  }
}

function convertFromKelvin(to, value) {
  const valueInCelsius = kelvinToCelsius(value);

  if (to === FAHRENHEIT) {
    return celsiusToFahrenheit(valueInCelsius);
  }

  if (to === CELCIUS) {
    return valueInCelsius;
  }

}

function convert(from, to, value) {
  if (typeof(value) !== 'number') {
    return NaN;
  }

  if (!isValidFormat(from) || !isValidFormat(to)) {
    return NaN;
  }

  if (from === to) {
    return value;
  }

  if (from === CELCIUS) {
    return convertFromCelsius(to, value);
  }

  if (from === KELVIN) {
    return convertFromKelvin(to, value);
  }

  if (from === FAHRENHEIT) {
    return convertFromFahrenheit(to, value);
  }
}

function isNaN(result) {
  return result + '' === 'NaN';
}

function getMark(isEqual, result) {
  return isEqual || isNaN(result) ? "✅" : "❌";
}

function printMessage(from, to, value, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual, result);
  const contextSegment = value + ' while converted from ' + from + ' to ' + to;
  const expectationSegment = " is | " + expectedResult;
  const actualSegment = " | and got | " + result + ' |';

  console.log(mark + contextSegment + expectationSegment + actualSegment);
}

function testConvert(from, to, value, expectedResult) {
  const result = convert(from, to, value);

  printMessage(from, to, value, expectedResult, result);
}

function testAll() {
  testConvert('C', 'C', 0, 0);
  testConvert('C', 'K', 0, 273.15);
  testConvert('K', 'C', 273.15, 0);
  testConvert('C', 'F', 37, 98.6);
  testConvert('F', 'C', -40, -40);
  testConvert('F', 'K', 98.6, 310.15);
  testConvert('K', 'F', 100, -279.67);
  testConvert('K', 'C', 100, -173.15);
  testConvert('K', 'C', 'a', NaN);
  testConvert('A', 'A', '100', NaN);
  testConvert('K', 'C', '100', -173.15);
  testConvert('F', 'K', '98.6', 310.15);
  testConvert('F', 'C', '-40', -40);
  testConvert('C', 'F', '37', 98.6);
  testConvert('K', 'F', '100', -279.67);
  testConvert('C', 'K', '0', 273.15);
  testConvert('K', 'K', 'abc', NaN);
}

testAll();