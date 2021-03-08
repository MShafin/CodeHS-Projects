public class FindMinimum extends ConsoleProgram
{
    public void run()
    {
        int one = readInt("enter first number. ");
        int two = readInt("enter second number. ");
        int three = readInt("enter third number. ");
        
        int min = Math.min(Math.min(one,two),three);
        
        System.out.println(min);
        
    }
}