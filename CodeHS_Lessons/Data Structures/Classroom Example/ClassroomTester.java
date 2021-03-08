public class ClassroomTester extends ConsoleProgram
{
    public void run()
    {
        Classroom myClass = new Classroom(10);
        
        Student ada = new Student("Ada", "Lovelace", 12);
        Student alan = new Student("Alan", "Turing", 11);
        myClass.addStudent(ada);
        myClass.addStudent(alan);
        myClass.printStudents();
    }
}