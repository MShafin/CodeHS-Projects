//String Combinator
//Shafin Mohammed
//
//CompSci 30
//March 26 2020
public class MyProgram extends ConsoleProgram{
    public void run(){
        while(true){
            System.out.println("Welcome to the Amazing String Combinator! ");
            //enter 2 words
            String one = readLine("Please enter string one: ");
            String two = readLine("Please enter string two: ");
            //output the sCombine return result
            String output = sCombine(one, two);
            System.out.println(output);
            //play again function
            String userInput = readLine("Would you like to try again?");
            if(userInput.equals("No") || userInput.equals("no")){
                System.out.println("Thanks for using the program!");
                break;
            }
        }
    }

	public static String sCombine(String a, String b){
        //resets the stored word
        String finalWord = "";
        for(int i = 0; i < a.length() || i < b.length(); i++){ 
            //choose ith char of first string, if exists
            if(i < a.length()){
                //add char to final word
                finalWord += a.charAt(i);
            }
            //choose ith char of second string, if exists
            if(i < b.length()){
                //add char to final word
                finalWord += b.charAt(i);
            }
        }
        return finalWord;
    }
}