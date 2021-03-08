var NUM_FLIPS = 100;

/* Write a program to flip a coin NUM_FLIPS
 * times an put the results into an array.
 * We also want to print that array.
 */
function start(){
	var flips = flipCoins();
	printArray(flips);
}

// This function should flip a coin NUM_FLIPS
// times, and add the result to an array. We
// return the result to the caller.
function flipCoins(){
	var flips = [];
	for(var i = 0; i < NUM_FLIPS; i++){
		if(Randomizer.nextBoolean()){
			flips.push("Heads");
		}else{
			flips.push("Tails");
		}
	}
	return flips;
}

function printArray(arr){
	for(var i = 0; i < arr.length; i++){
		println(i + ": " + arr[i]);
	}
}