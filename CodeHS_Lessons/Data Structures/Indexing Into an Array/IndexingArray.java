public class IndexingArray extends ConsoleProgram
{
    public void run()
    {
        // Make an array with 10 slots.
        int[] arr = new int[10];
        
        // Set the value at index 1.
        arr[1] = 4;
        
        // Get the value at index 1.
        System.out.println(arr[1]);
        
        arr[2] = 10;
        arr[3] = -12;
        System.out.println(arr[2]);
    }
}