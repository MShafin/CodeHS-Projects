public class Classroom
{
    private Student[] students;
    private int curIndex;
    private int totalStudents;
    
    public Classroom(int numStudents)
    {
        students = new Student[numStudents];
        curIndex = 0;
        totalStudents = 0;
    }
    
    public void addStudent(Student s)
    {
        students[curIndex] = s;
        curIndex++;
        totalStudents++;
    }
    
    public void printStudents()
    {
        System.out.println("Your Classroom");
        for(int i = 0; i < totalStudents; i++)
        {
            System.out.println(students[i]);
        }
    }
}
