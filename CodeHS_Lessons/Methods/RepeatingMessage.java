public class MyProgram extends ConsoleProgram
{
    public void run()
    {
        printMessage("Hi", "Karel", 5);
    }
    
    public void printMessage(String lineOne, String lineTwo, int numLines)
    {
        for(int i = 0; i < numLines; i++){
            if(i%2 == 0){
                System.out.println(lineOne);
            } else {
                System.out.println(lineTwo);
            }
        }
    }
}