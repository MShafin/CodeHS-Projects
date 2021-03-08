public class IndexOutOfBoundsExample extends ConsoleProgram
{
    public void run()
    {
        String hello = "hello";
        
        System.out.println(hello.charAt(0));
        System.out.println(hello.charAt(3));
        
        // Program makes it here without crashing
        // No runtime exceptions have been thrown yet
        System.out.println("I haven't crashed yet!");
        
        // This line causes an IndexOutOfBoundsException
        System.out.println(hello.charAt(-1));
        
        // Program does not make it to this point
        // The previous line caused an IndexOutOfBoundsException
        System.out.println("If this prints, I still haven't crashed!");
    }
}