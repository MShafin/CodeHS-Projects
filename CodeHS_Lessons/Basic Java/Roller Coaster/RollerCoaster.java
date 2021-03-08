public class RollerCoaster extends ConsoleProgram
{
    public void run()
    {
        boolean tallEnough = readBoolean("Are you tall enough. True or False. ");
        boolean oldEnough = readBoolean("Are you old enough. True or False. ");
        
        if(tallEnough && oldEnough == true){
            System.out.println("true");
        } else {
            System.out.println("false");            
        }
        
    }
}