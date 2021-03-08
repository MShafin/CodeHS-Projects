public class Sum extends ConsoleProgram
{
    public void run()
    {
        sum(2, 2);
        sum(10, 400);
    }
    
    private void sum(int a, int b)
    {
        int total = a + b;
        System.out.println(total);
    }
}