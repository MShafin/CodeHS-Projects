/*
 * This class shows examples of the order of operations
 * when casting inside of arithmetic expressions.
 */
public class CastingOrderOfOperations extends ConsoleProgram
{
    public void run()
    {
        // Casting to an int chops off the decimal, rather than rounding
        // to the nearest int.
        int doubleCastedToInt = (int) 10.9 ;
        System.out.println("Casting to an int: ");
        System.out.println("(int) 10.9 = " + doubleCastedToInt);
        System.out.println();
        
        // Casting takes place before any arithmetic operations
        // like addition, subtraction, multiplication, division, modulus
        // But parentheses take precendence over all.
        double castNumerator = (double) 2 / 3;
        System.out.println("Casting numerator: ");
        System.out.println("(double) 2 / 3 = " + castNumerator);
        System.out.println();
        
        double castDenominator = 2 / (double) 3;
        System.out.println("Casting denominator: ");
        System.out.println("2 / (double) 3 = " + castDenominator);
        System.out.println();
        
        double castNeither = 2 / 3;
        System.out.println("Casting neither (integer division): ");
        System.out.println("2 / 3 = " + castNeither);
        System.out.println();
        
        double castOutsideOfParentheses = (double) (2 / 3);
        System.out.println("Casting outside of parentheses: ");
        System.out.println("(double) (2 / 3) = " + castOutsideOfParentheses);
        System.out.println();
        
        /*
        
            Notice in the next two examples, we use multiple
            arithmetic operators to construct a compound expression, 
            As a result, we apply our order of operations.
        
        */ 
        
        // This casts the 5, which results in
        // 5.0 + 2 / 3. The integer division happens first, resulting in
        // 5.0 + 0 = 5.0
        double castWrongElement = (double) 5 + 2 / 3;
        System.out.println("Casting the 5...\n2 / 3 is unaffected by cast (be careful):");
        System.out.println("(double) 5 + 2 / 3 = " + castWrongElement);
        System.out.println();
        
        // This casts the 2, which results in
        // 5 + 2.0 / 3. The division will be double division, resulting in
        // 5 + 0.6666 = 5.6666
        double castCorrectElement = 5 + (double) 2 / 3;
        System.out.println("Cast happens before the division here:");
        System.out.println("5 + (double) 2 / 3 = " + castCorrectElement);
        System.out.println();
    }
}