public class ArithmeticExceptionExample extends ConsoleProgram
{
    public void run()
    {
        System.out.println(integerDivision(10, 2));
        System.out.println(integerDivision(20, 5));
        
        // Program makes it to this point without crashing
        System.out.println("I haven't crashed yet!");
        
        System.out.println(integerDivision(5, 0));
        
        // Program doesn't make it here, because the previous
        // line caused an ArithmeticException
        System.out.println("If this prints, I still haven't crashed!");
    }
    
    public int integerDivision(int dividend, int divisor)
    {
        // It is illegal to divide by 0
        // Java will throw an ArithmeticException here if divisor is 0
        return dividend / divisor;
    }
}