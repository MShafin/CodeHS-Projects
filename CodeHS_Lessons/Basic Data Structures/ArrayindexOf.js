function indexOf(arr, str){
	for(var i = 0; i < arr.length; i++){
		var cur = arr[i];
		if(cur == str){
			return i;
		}
	}
	return -1;
}

function start(){
	var list = ["bread", "eggs", "milk", "cookies", "bananas", "tuna", "lettuce", 
	"yogurt", "cheese", "chicken", "cucumbers", "orange juice", "salt", "doritos", 
	"lemonade", "apples", "paper towels", "red onion", "minced garlic", "tumeric", 
	"donuts", "bagels", "crackers", "red pepper", "green pepper", "spinach", 
	"canola oil", "vanilla", "flour", "brown sugar", "powdered sugar", "lime"];
	
	var idx = indexOf(list, "donuts");
	println(idx);
	
	println(indexOf(list, "apple juice"));
	
	println(list.indexOf("donuts"));
	println(list.indexOf("apple juice"));	
}