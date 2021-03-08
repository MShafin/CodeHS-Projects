public class GuessTheNumber extends ConsoleProgram
{
    public void run()
    {
        int secretNumber = 6;
        int guess = 0;
        
        System.out.println("I'm thinking of a number between 1 and 10.");
        System.out.println("See if you can guess the number!");
        
        while(guess != secretNumber){
            guess = readInt("Enter your guess: ");
            
            if(guess == secretNumber){
                break;
            }else{
                System.out.println("Try again!");
            }
        }
    
        System.out.println("Correct!");
    }
}