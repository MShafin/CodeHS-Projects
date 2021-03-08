public class LoopingOverString extends ConsoleProgram
{
    public void run()
    {
        String str = "Hello world!";
        
        int length = str.length();
        System.out.println(length);
        
        for(int i = 0; i < str.length(); i++)
        {
            char cur = str.charAt(i);
            System.out.println(cur);
        }
    }
}