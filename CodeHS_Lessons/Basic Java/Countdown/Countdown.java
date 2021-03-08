public class Countdown extends ConsoleProgram
{
    // This program prints a countdown from
    // 100 down to 0 using a for loop.
    public void run()
    {
        System.out.println("Countdown");
        for (int i = 100; i >= 0; i--)
        {
            System.out.println(i);
        }
    }
}