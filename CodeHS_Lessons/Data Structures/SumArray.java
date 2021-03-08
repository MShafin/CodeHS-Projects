public class SumArray extends ConsoleProgram
{
    public void run()
    {
        int[] arr = {4, 10, 24, 142, 123, 13};
        
        int sum = 0; 
        for(int i = 0; i < arr.length; i++)
        {
            sum += arr[i];
        }
        
        System.out.println("The sum is " + sum);
    }
}