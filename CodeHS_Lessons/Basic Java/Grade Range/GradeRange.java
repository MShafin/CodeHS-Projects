public class GradeRange extends ConsoleProgram
{
    public void run()
    {
        int grade = readInt("What was your grade? ");
	    boolean gotB = grade >= 80 && grade < 90;
	    System.out.println("Got a B: " + gotB);  
    }
}