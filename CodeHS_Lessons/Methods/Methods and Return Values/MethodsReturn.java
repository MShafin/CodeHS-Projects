public class MethodsReturn extends ConsoleProgram
{
    public void run()
    {
        int result = sum(2, 5);
        System.out.println(result);
        
        System.out.println(sum(10, 20));
        
        int result2 = sum(100, 35);
        System.out.println(result2);
        
        System.out.println("Testing AddOne Method");
        
        int y = addOne(5);
        System.out.println(y);
        
        System.out.println(addOne(10));
        
        System.out.println("Testing Double Number");
        int doubled = doubleNumber(10);
        System.out.println(doubled);
        
        System.out.println("Testing Next Even Number");
        int even = nextEven(9);
        System.out.println(even);
    }
    
    private int doubleNumber(int x)
    {
        return 2 * x;
    }
    
    private int addOne(int x)
    {
        return x + 1;
    }
    
    private int sum(int a, int b)
    {
        int total = a + b;
        return total;
    }
    
    private int nextEven(int x)
    {
        // Notice in this example we have a return statement inside our loop
        // If the loop hits the return statement, it will stop the loop at 
        // that point.
        for (int i = x; i < x + 2; i++)
        {
            if (i % 2 == 0)
            {
                return i;
            }
            
        }
        
        // If no even is found, return original number
        // (we will find an even number)
        return x;
    }
    
}