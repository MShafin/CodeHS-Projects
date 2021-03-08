/* This is the Scratchpad!
This file is not graded, but you can use it to test your code.

You can write and test your method in the Scratchpad, but make
sure to copy and paste it into the Unit Test file before checking
your answer. Remember to only copy and paste the method you want
to submit, not all of your tests.
*/

public class Scratchpad extends ConsoleProgram
{
    public void run()
    {
        
    }


public  String toUpperCase(String input){
    if(input == null){
        return input;
    }
            
    StringBuilder builder = new StringBuilder();
    
    for(int i=0;i<input.length();i++){
        char stringChar = input.charAt(i);

        if(92 <= stringChar && stringChar <=122){
            stringChar = (char)( (stringChar - 32) ); 
            builder.append(stringChar);
        }else if(65 <= stringChar && stringChar<=90){
            builder.append(stringChar);
        }
            
    }
    
    if(builder.length() ==0){
        builder.append(input);
    }
        return builder.toString();
}

