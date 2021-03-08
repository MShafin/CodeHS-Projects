//Multiple Adder
//Shafin Mohammed
//
//CompSci 30
//March 16 2020
public class MyProgram extends ConsoleProgram{
    public void run(){
        Boolean playAgain = true; //boolean to determine if play again is true or false
        String userPlay = "Y"; //string to read if the user would like to play again
        System.out.println("Welcome to the amazing multiples adder!");
        while(playAgain = true){
            //User enter 3 nums
            int num1 = readInt("Enter first number: ");
            int num2 = readInt("Enter second number: ");
            int num3 = readInt("Enter third number: ");
            
            //initilize the Sum or reset it
            int SUM = 0;
            
            //loop code and create testing nums
            for(int i = 0; i <= 10000; i++){
                //if i is divisible by all the nums then add it
                //else ignore and move on
                if(i % num1 == 0 && i % num2 == 0 && i % num3 == 0){
                    SUM += i;
                }
            }
           
            //print out the Sum
            System.out.println("Sum of their multiples is: " + SUM);
            
            //Aske user to replay Script
            while(userPlay.equals("Y")){
                userPlay = readLine("Would you like to try again? (Y|N)");
                if(userPlay.equals("N")){
                    playAgain = false;
                    break;
                }else if(userPlay.equals("Y")){
                    playAgain = true;
                    System.out.println("That's Great ");
                    break;
                }else{
                    userPlay = "Y";
                    System.out.println("Invalid Input try again ");
                }
            }
            if(userPlay.equals("N")){
                System.out.println("Bye Bye ");
                break;
            }
        }
    }
}