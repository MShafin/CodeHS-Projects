function start(){
	var arr = [7, 4, 14, 8, 3, 9];
	println(arr);
	arr.pop();
	println(arr);
	
	var elem = arr.remove(2);
	//arr.splice(2, 1);
	println(arr);
	
	println("We removed: " + elem);
}