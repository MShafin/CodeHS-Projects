public class AddFractions extends ConsoleProgram
{
    public void run()
    {
    int num1 = readInt("What is the numerator of the first fraction? ");
    int den1 = readInt("What is the denominator of the first fraction? ");
    int num2 = readInt("What is the numerator of the second fraction? ");
    int den2 = readInt("What is the denominator of the second fraction? ");
    
    int ansNum = (num1*den2) + (num2*den1);
    int ansDen = den2*den1;
    
    System.out.println("The sum of " + num1+"/"+den1 + " + " + num2+"/"+den2 + " = " + ansNum+"/"+ansDen);

    }
}