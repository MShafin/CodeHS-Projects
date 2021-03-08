public class CastingToDouble extends ConsoleProgram
{
    public void run()
    {
        int firstInt = readInt("First Int: ");
        int secondInt = readInt("Second Int: ");
        System.out.println((double)firstInt/secondInt);
    }
}