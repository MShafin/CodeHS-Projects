function start(){
	var line = ["Sam" , " Lisa" , " Laurie" , " Bob" , " Ryan"];
	println(line);
	removeNames();
}

function removeNames(){
    var arr = ["Sam" , "Lisa" , "Laurie" , " Bob" , " Ryan"];
    //removes Sam and Lisa from List
	arr.remove(0);
	arr.remove(0);
	println(arr);
}