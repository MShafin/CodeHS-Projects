public class IteratingOverArray extends ConsoleProgram
{
    public void run()
    {
        /* What happens if you add to the array? 
            Does the new value still print?
        */
        
        int[] arr = {2, 10, 12, 13, 10, 142};
        
        for(int i = 0; i < arr.length; i++)
        {
            System.out.println(arr[i]);
        }
    }
}