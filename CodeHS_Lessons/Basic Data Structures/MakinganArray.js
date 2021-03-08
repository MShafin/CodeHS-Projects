function start(){
	var arr = [5, 8, 103, 32, 7];
	
	println(arr[0]);
	
	println(arr[2]);
	
	
	var shoppingList = ["bread", "eggs", 
						"milk", "cookies"];
	
	// Let's print out index 1
	println(shoppingList[1]);
	
	
	// Let's get cake instead of milk
	println(shoppingList[2]);
	shoppingList[2] = "cake";
	println(shoppingList[2]);
	
}