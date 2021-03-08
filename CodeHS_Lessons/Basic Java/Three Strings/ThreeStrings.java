public class ThreeStrings extends ConsoleProgram
{
    public void run()
    {
        // Ask the user for three strings.
        String one = readLine("First string? " );
        String two = readLine("Second string? " );
        String three = readLine("Third string? " );
        
        //Compare
        if(three.equals(one + two)){
            System.out.println(one +" + "+ two +" is equal to "+ three +"!");
        }else{
            System.out.println(one +" + "+ two +" is not equal to "+ three +"!");
        }

    }
}