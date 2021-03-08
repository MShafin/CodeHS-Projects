public class EvenOdd extends ConsoleProgram
{
    public void run()
    {
        int num = readInt("Number: ");
    	if(num % 2 == 0)
    	{
    		System.out.println("Number is even.");
    	}
    	else
    	{
    		System.out.println("Number is odd.");
    	}
        
    }
}