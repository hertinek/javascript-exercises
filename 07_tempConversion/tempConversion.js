const makeHumanReadable = function(x) {
  Math.round(x * 10) / 10
}

const fahrenheitToCelsius = function(tempInFahrenheit) {
  let resultToCelsius = (tempInFahrenheit - 32) * (5 / 9); // Formula: x °F ≘ (x - 32) × (5 / 9) °C
  return makeHumanReadable(resultToCelsius);
};


const celsiusToFahrenheit = function(tempInCelsius) {
  let resultToFahrenheit = tempInCelsius * (9 / 5) + 32; // Formula: x °C ≘ (x × 9/5 + 32) °F
  return makeHumanReadable(resultToFahrenheit);
};




// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
