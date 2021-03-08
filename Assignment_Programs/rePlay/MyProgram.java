public class MyProgram extends ConsoleProgram{
    public void run(){
        Boolean playAgain = true; //boolean to determine if play again is true or false
        String userPlay = "Y"; //string to read if the user would like to play again
        while(playAgain = true){

            //start paste game here
            String tempGame = readLine("Type Anything: ");
            //end paste game here
            
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