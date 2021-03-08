public class StringConcatenation extends ConsoleProgram
{
    public void run()
    {
        // Be careful when concatenating Strings!
        // The + operator works from left to right
        // Sometimes the result is not what you'd expect:
        
        System.out.println("Testing Out String Concatenation!");
        System.out.println("=================================");
        System.out.println();
        
        // int + int + String
        String testString1 = 5 + 5 + "hello";
        System.out.println("5 + 5 + \"hello\" = " + testString1);
        System.out.println("The first '+' adds 5 + 5, resulting in 10");
        System.out.println("The second '+' adds 10 + \"hello\", resulting in \"10hello\"");
        System.out.println();
        
        // String + int + int
        String testString2 = "hello" + 5 + 5;
        System.out.println("\"hello\" + 5 + 5 = " + testString2);
        System.out.println("The first '+' adds \"hello\" + 5, resulting in \"hello5\"");
        System.out.println("The second '+' adds \"hello5\" + 5, resulting in \"hello55\"");
        System.out.println();
        
        // String + (int + int)
        String testString3 = "hello" + (5 + 5);
        System.out.println("\"hello\" + (5 + 5) = " + testString3);
        System.out.println("Parentheses take precedence over '+'");
    }
}