public class Sum extends ConsoleProgram
{
    public void run()
    {
        int answer = sum(2, 5);
        System.out.println(answer);
        
        // When we have a method that doesn't return anything,
        // we cannot assign it to a variable.
        
        // Try uncommenting the line below and see the results.
        
        // int answer2 = printSum(3, 4);
        
    }
    
    /**
     * This returns the sum of two integers.
     *
     * @param x The first integer
     * @param y The second integer
     * @return The sum of the two integers.
     */
    private int sum(int x, int y)
    {
    	return x + y;
    }
    
     /**
     * This prints the sum of two integers.
     *
     * @param x The first integer
     * @param y The second integer
     * @return none
     */
    private void printSum(int x, int y)
    {
    	System.out.println(x + y);
    }

}