public class ArrayReferences extends ConsoleProgram
{
    public void run()
    {
        int[] arr = {10, 3, 123, 44};
        
        // arr2 is just a reference to arr, this does not
        // copy the individual elements
        int[] arr2 = arr;
        
        // changing this in arr also changes it in arr2
        arr[1] = 88; 

        // Note that these have the same value because they 
        // are referring to the same array
        System.out.println(arr[1]);
        System.out.println(arr2[1]);

        arr2[0] = 80;
        
        // Modifying a value via arr2 also changes it in arr
        System.out.println(arr[0]);
        System.out.println(arr2[0]);
    }
}