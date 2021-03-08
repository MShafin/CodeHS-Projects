public class Taffy extends ConsoleProgram
{
    public void run()
    {
        System.out.println("Starting Taffy Timer...");
        int temp = readInt("Enter the temperature: ");
        
        while(temp <= 260){
            System.out.println("The mixture isn't ready yet.");
            temp = readInt("Enter the temperature: ");
        }
        
        System.out.println("Your taffy is ready for the next step!");
    }
}