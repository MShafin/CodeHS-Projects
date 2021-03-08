public class Casting extends ConsoleProgram
{
    public void run()
    {
        int total = 100;
        int numPeople = 40;
        double average = total / (double) numPeople;
        System.out.println("Total: " + total);
        System.out.println("People: " + numPeople);
        System.out.println("Average: " + average);
    }
}