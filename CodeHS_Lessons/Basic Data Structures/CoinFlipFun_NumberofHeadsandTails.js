var NUM_FLIPS = 100;

function start(){
	var flips = flipCoins();
	printArray(flips);
	countHeadsAndTails(flips);
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

function countHeadsAndTails(flips){
    var headsCount = 0;
    var tailsCount = 0;
    for(var i = 0; i < flips.length; i++){
        if(flips[i] == "Heads"){
            headsCount++;
        }else {
            tailsCount++;
        }
    }
    println("Number of heads: " + headsCount);
    println("Number of tails: " + tailsCount);
}