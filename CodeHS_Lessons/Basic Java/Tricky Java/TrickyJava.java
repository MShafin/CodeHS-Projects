public class TrickyJava extends ConsoleProgram
{
    public void run()
    {
        int candyBars = 20;
        int friends = 5;
        
        System.out.println("Candy bars: " + candyBars);
        System.out.println("Friends: " + friends);
        
        int candyBarsPerPerson = candyBars / friends;
        // We expect it to be 4... and it is 4.
        System.out.println("Candy per person: " + candyBarsPerPerson);
        
        friends++;

        System.out.println("Candy bars: " + candyBars);
        System.out.println("Friends: " + friends);

        // We expect it to be 3.33.. and it is ... 3.
        // Tricky integer division.
        candyBarsPerPerson = candyBars / friends;
        System.out.println("Candy per person: " + candyBarsPerPerson);
        
    }
}