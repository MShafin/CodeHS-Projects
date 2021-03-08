public class Factorial extends ConsoleProgram
{
    
    public void run()
    {
        //ask user for factorial
        int fact = 1;  
        int number = readInt("What number would you like to compute the factorial for? ");//It is the number to calculate factorial    
        
        for(int i=1; i<=number; i++){    
            fact=fact*i;    
        }    
    	
    	
    	System.out.println(fact);
    }
}