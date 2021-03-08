function start(){
	var result = sum(5, 8);
	println(result);
	
	var x = sum(10, 20);
	println(x);
	
	var y = addOne(100);
	println(y);
	
	var z = addOne(y);
	println(z);
}


function sum(first, second){
	var total = first + second;
	return total;
}

function addOne(x){
	return x + 1;
}