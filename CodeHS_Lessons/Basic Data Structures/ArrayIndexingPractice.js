function start(){
	var shoppingList = [
		"bread", "eggs", 
		"milk", "cookies"];

	println(shoppingList[0]);
	println(shoppingList[1]);
	println(shoppingList[2]);
	println(shoppingList[3]);
	
	shoppingList[2] = "tuna";
	println(shoppingList[2]);
	
	var idx = 0;
	println(shoppingList[idx]);
	
	var val = shoppingList[1];
	println(val);
	
	
}