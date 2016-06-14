//Write a function that compares two numbers and returns the larger one. Be sure to try it out with some different numbers. 
//Bonus: add error messages if the numbers are equal or cannot be compared.

function largerNum(1num, 2num) {
	if(1num === 2num) {
	console.log ('Equal Numbers!');
	return num1;
	} else if (1num > 2num) {
	  return 1num;
	} else if (2num > 1num) {
	  return 2num;
	} else {
	  console.log ('Nope, not comparable!');
	  return undefined;
	}
}