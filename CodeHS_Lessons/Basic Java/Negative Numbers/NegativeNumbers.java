public class NegativeNumbers extends ConsoleProgram
{
    // This program reads a number from the
    // user and prints if it is negative.
    public void run()
    {
        int number = readInt("Number: ");
        if (number < 0)
        {
            System.out.println("Number is negative");
        }
    }
}