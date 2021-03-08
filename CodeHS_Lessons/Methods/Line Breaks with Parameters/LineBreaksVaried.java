public class LineBreaksVaried extends ConsoleProgram
{
    private void printLineBreak(int length)
    {
        for(int i = 0; i < length; i++)
        {
            System.out.print("=");
        }
        System.out.println();
        
        for(int i = 0; i < length; i++)
        {
            System.out.print("*");
        }
        System.out.println();
    }

    public void run()
    {
        printLineBreak(3);
        System.out.println("Part 1");
        
        printLineBreak(6);
        System.out.println("Part 2");
        
        printLineBreak(10);
        System.out.println("Part 3");
        
        printLineBreak(20);
    }
}