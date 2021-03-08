/*
 * This class shows how you can use casting to round double values
 * to the nearest integer value.
 */
public class RoundingWithCasting extends ConsoleProgram
{
    public void run()
    {
    
        double value1 = 10.0;
        double value2 = 10.3;
        double value3 = 10.7;
        double value4 = -10.4;
        double value5 = -10.9;
        double value6 = -11.1;
        
        // Add 0.5 to round a positive number
        int rounded1 = (int) (value1 + 0.5);
        int rounded2 = (int) (value2 + 0.5);
        int rounded3 = (int) (value3 + 0.5);
        
        // Subtract 0.5 to round a negative number
        int rounded4 = (int) (value4 - 0.5);
        int rounded5 = (int) (value5 - 0.5);
        int rounded6 = (int) (value6 - 0.5);
        
        System.out.println("Adding 0.5 then casting to an int will round a positive\n" + 
                            "number to the nearest int.\n" +
                            "If the decimal is 0.5 or greater, this will round up.\n" +
                            "If the decimal is less than 0.5, this will round down\n" +
                            "Can you determine why?");
                        
        System.out.println();
        System.out.println(value1 + " rounded = " + rounded1);
        System.out.println(value2 + " rounded = " + rounded2);
        System.out.println(value3 + " rounded = " + rounded3);
        System.out.println();
        
        System.out.println("Subtracting 0.5 then casting to an int will round a negative\n" + 
                            "number to the nearest int.\n" +
                            "If the decimal is 0.5 or greater, this will round up.\n" +
                            "If the decimal is less than 0.5, this will round down\n" +
                            "Can you determine why?");
        System.out.println();
        System.out.println(value4 + " rounded = " + rounded4);
        System.out.println(value5 + " rounded = " + rounded5);
        System.out.println(value6 + " rounded = " + rounded6);
    }
}