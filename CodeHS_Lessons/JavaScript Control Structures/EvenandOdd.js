// This program reads a number from the
// user and prints out whether it is
// even or odd using the modulus operator.
function start(){
	var num = readInt("Number: ");
	if(num % 2 == 0){
		println("Number is even.");
	}else{
		println("Number is odd.");
	}
}