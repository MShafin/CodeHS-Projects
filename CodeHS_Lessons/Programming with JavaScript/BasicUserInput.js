/* This program prompts the user for their name
 * and age, and then prints it back out. */
function start(){
	var name = readLine("What is your name? ");
	println("Name is: " + name);
	
	var age = readInt("What is your age? ");
	println("Age is: " + age);
}