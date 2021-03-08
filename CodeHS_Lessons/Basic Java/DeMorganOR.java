public class NightBiking extends ConsoleProgram
{
    public void run()
    {
        boolean hasHeadlight = readBoolean("Do you have a head light? ");
        boolean hasBikelight = readBoolean("Do you have a bike light? ");
        
        // Negating an OR statement
        boolean cannotNightBike = !(hasHeadlight || hasBikelight);
        
        // Same statement!
        boolean cannotNightBikeDeMorgan = !hasHeadlight && !hasBikelight;
        
        if(cannotNightBike)
        {
            System.out.println("You may not bike at night.");
        }
        else
        {
            System.out.println("You may bike at night!");
        }
        
        if(cannotNightBikeDeMorgan)
        {
            System.out.println("You may not bike at night with De Morgan.");
        }
        else
        {
            System.out.println("You may bike at night with De Morgan!");
        }
        
        if(cannotNightBike == cannotNightBikeDeMorgan)
        {
            System.out.println("De Morgan was right!");
        }
    }
}