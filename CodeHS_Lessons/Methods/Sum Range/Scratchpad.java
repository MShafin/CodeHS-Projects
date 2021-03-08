/* This is the Scratchpad!
This file is not graded, but you can use it to test your code.

You can write and test your method in the Scratchpad, but make
sure to copy and paste it into the Unit Test file before checking
your answer. Remember to only copy and paste the method you want
to submit, not all of your tests.
*/

public class Scratchpad extends ConsoleProgram
{
    int sum = 0;
    public void run()
    {
        sumFrom(1,10);
        System.out.println(sum);
    }

    public int sumFrom(int start, int end)
    {
        for (int i = start; i < end; i++)
        {
            sum += i;
        }
        return sum;
    }

}
