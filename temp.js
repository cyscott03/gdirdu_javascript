//make a program to convert celsius tempatures to fahrenheit and vice versa

var celTemp = prompt('Enter the temperature in Celsius');
var convertF = (celTemp * 9)/ 5 + 32;
console.log(celTemp + ' C is ' + convertF + ' F.');
var fahTemp = prompt('Enter the temperature in Fahrenheit');
var convertC = (fahTemp - 32)/9 * 5;
console.log(fahTemp + ' F is ' + convertC + ' C.');