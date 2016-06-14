//Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, 
//and report that to the screen (e.g. "2 is even")
for(var counter = 0; counter <= 20; counter++){
	console.log(counter);
	if (counter % 2 == 0) {
    console.log(counter + ' is even');
  } 
  if(counter % 2 == 1) {
  	console.log(counter + ' is odd');
  }
}