public class PrintArray extends ConsoleProgram
{
    public void run()
    {
        String[] arr = new String[]{"a", "b", "c"};
        printArr(arr);
    }
    
    public void printArr(String[] arr)
    {
        for(int i = 0; i < arr.length; i++)
        {
            System.out.println(arr[i]);
        }
    }
}