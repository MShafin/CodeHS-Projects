public class OutOfBounds extends ConsoleProgram
{
    public void run()
    {
        int[] arr = new int[4];
        int val = arr[4]; // What happens here?
    }
}