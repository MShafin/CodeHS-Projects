public class ClassroomTester extends ConsoleProgram
{
    private void generateExamScores(Student s)
    {
        for(int i = 0; i < Student.NUM_EXAMS; i++)
        {
            // Graded on a curve
            int score = Randomizer.nextInt(60, 100);
            s.addExamScore(score);
        }
    }
    
    public void run()
    {
        Classroom c = new Classroom(10);
        
        Student ada = new Student("Ada", "Lovelace", 12);
        Student alan = new Student("Alan", "Turing", 11);
        
        generateExamScores(ada);
        generateExamScores(alan);
        
        c.addStudent(ada);
        c.addStudent(alan);
        
        c.printStudents();
        
        alan.printAllExams();
    }
}