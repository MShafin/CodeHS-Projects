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
        boolean one = inRange(2,1,3);;
        System.out.println(one);
    }

    public boolean inRange(int num, int min, int max)
    {
        if(num >= min && num <= max){
            return true;
        }else{
            return false;
        }
    }
}