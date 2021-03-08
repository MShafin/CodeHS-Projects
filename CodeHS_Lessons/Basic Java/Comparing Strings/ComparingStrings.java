public class ComparingStrings extends ConsoleProgram
{
    public void run()
    {
        String favoriteWebsite = readLine("Favorite Website? ");
        
        if(favoriteWebsite.equals("CodeHS"))
        {
            System.out.println("Good Choice");
        }
    }
}