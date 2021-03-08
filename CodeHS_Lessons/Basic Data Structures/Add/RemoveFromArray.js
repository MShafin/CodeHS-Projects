function start(){
	var arr = [];
	arr.push(5);
	
	println(arr[0]);
	println(arr[1]);
	
	// Push lets you add to the array
	arr.push(12);
	arr.push(1);
	arr.push(1000);
	arr.push(3);
	
	println(arr[4]);
	// Pop removes the last element
	var last = arr.pop();
	
	println(last);
	
	println(arr[4]);
}