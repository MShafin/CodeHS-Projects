//Better Password Prompt
//Shafin Mohammed
//May 31
//
//A program that uses a loop and a half to prompt a user for a password.

var SECRET = "abc123";
function start(){
    while(true){
        var password = readLine("What is the password? ");
        if(password == SECRET){
            break;
        }else{
            println("Sorry, that did not match. Please try again.");
        }
    }
}