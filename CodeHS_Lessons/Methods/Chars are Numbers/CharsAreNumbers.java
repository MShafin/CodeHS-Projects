public class CharsAreNumbers extends ConsoleProgram
{
    // If you want to see more about the ints behind every
    // char take a full look at the ASCII table
    // http://www.asciitable.com/
    public void run()
    {
        // 'a' has the ASCII value 97
        System.out.println("=== 'a' has the ASCII value 97");
        char lowercaseA = 'a';
        System.out.println(lowercaseA);
        System.out.println((int)lowercaseA);

        // 'A' has the ASCII value 65
        System.out.println("=== 'A' has the ASCII value 65");
        char uppercaseA = 'A';
        System.out.println(uppercaseA);
        System.out.println((int)uppercaseA);
        
        // 'C' is 2 characters after 'A'
        System.out.println("=== 'C' is 2 characters after 'A'");
        int difference = 'C' - 'A';
        System.out.println(difference);
        
        // 'K' is 10 characters after 'A'
        System.out.println("=== 'K' is 10 characters after 'A'");

        char tenAfter = (char)('A' + 10);
        System.out.println(tenAfter);
        
        System.out.println("How does that work?");

        char capitalA = 'A';
        System.out.println(capitalA);
        System.out.println(".... has the int value ...");
        
        int capitalAInt = (int)capitalA;
        System.out.println(capitalAInt);
        
        System.out.println(".... add 10 and you get ...");
        int capitalAPlusTen = capitalAInt + 10;
        System.out.println(capitalAPlusTen);
        
        System.out.println("... cast that back to a char and you get...");

        char backToChar = (char)capitalAPlusTen;
        System.out.println(backToChar);
        
    }
}