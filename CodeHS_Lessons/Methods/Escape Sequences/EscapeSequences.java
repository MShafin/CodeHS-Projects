public class EscapeSequences extends ConsoleProgram
{
    public void run()
    {
        // The \n adds a new line!
        String manyLines = "First Line\nSecond Line";
        System.out.println(manyLines);
        
        // To add sarcasm...
        String message = "Make sure to finish your \"homework\"";
        System.out.println(message);
    }
}