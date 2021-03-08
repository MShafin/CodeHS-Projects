function start(){
	var arr = [1, 8, 123, 103, 992, 
			   21, 2, 2, 144, 523, 
			   13, 90, 77, 12, 13];
	
	var sum = 0;
	
	for(var i = 0; i < arr.length; i++){
		var cur = arr[i];
		sum += cur;
	}
	
	println(sum);
	
}