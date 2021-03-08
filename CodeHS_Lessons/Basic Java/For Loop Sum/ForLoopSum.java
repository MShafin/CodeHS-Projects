public class ForLoopSum extends ConsoleProgram
{
    // These variables are called constants.
    // We'll talk more about these later.
    private static final int MIN = 1;
    private static final int MAX = 1000;
    
    public void run()
    {
        int sum = 0;
    	for(int i = MIN; i <= MAX; i++)
    	{
    		sum += i;
    	}
    	
    	System.out.println(sum);
    }
}