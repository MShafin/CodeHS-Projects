public class Biking extends ConsoleProgram
{
    public void run()
    {
        boolean hasBike = readBoolean("Do you have a bike? ");
        boolean hasHelmet = readBoolean("Do you have a helmet? ");
        
        // Negating an AND statement
        boolean cannotBike = !(hasBike && hasHelmet);
        
        // Same statement!
        boolean cannotBikeDeMorgan = !hasBike || !hasHelmet;
        
        if(cannotBike)
        {
            System.out.println("You may not bike.");
        }
        else
        {
            System.out.println("You may bike!");
        }
        
    
        if(cannotBikeDeMorgan)
        {
            System.out.println("You may not bike with De Morgan.");
        }
        else
        {
            System.out.println("You may bike with De Morgan!");
        }
        
        if(cannotBike == cannotBikeDeMorgan)
        {
            System.out.println("De Morgan was right!");
        }
    }
}