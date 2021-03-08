/*
 * Short Circuit Evaluation
 * ===================================
 * When evaluating conditional statements, Java will take
 * a shortcut, or short circuit, if it knows early on that
 * the entire statement will end up being true or false.
 * 
 * For example, in the statement
 * boolean shortCircuit = true || (a == b);
 * the a == b will never actually be evaluated, because true || anything
 * will always be true!
 *
 * See examples of this below:
 */

public class PizzaSlices extends ConsoleProgram
{
    public void run()
    {
        // Dividing by zero causes the program to crash
        // In each of the following statements, the division by 0
        // will never execute, due to short circuit evaluation:
        
        // Using short circuiting to prevent divide by 0
        int numSlices = 10;
        System.out.println("There are " + numSlices + " slices of pizza.");
        int numPeople = readInt("How many people will be eating pizza: ");
        
        if(numPeople != 0 && numSlices / numPeople > 0)
        {
            System.out.println("Each person gets " + numSlices / numPeople + " slices!");
        }
        else
        {
            System.out.println("There is not enough pizza for everyone.");
        }
        
        System.out.println();
        
        // Short circuit with ||
        // Division by 0 will not execute
        boolean willBeTrue = true || (3 / 0 > 1);
        System.out.println("true || (3 / 0 > 1) == " + willBeTrue);
        
        // Short circuit with &&
        // Division by 0 will not execute
        boolean willBeFalse = false && (9 / 0 == 0);
        System.out.println("false && (9 / 0 == 0) == " + willBeFalse);
    }
}