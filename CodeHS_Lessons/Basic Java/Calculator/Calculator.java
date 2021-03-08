public class Calculator extends ConsoleProgram
{
    public void run()
    {
        int first = readInt("First: ");
        int second = readInt("Second: ");
        int sum = first + second;
        System.out.println(sum);
    }
}