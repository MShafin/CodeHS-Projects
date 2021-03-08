public class MovieRatings extends ConsoleProgram
{
    public void run()
    {
        double movieRating = readDouble("Please enter a movie rating: ");
        int round = (int) (movieRating + 0.5);
        System.out.println("Rating rounded: " + round);

    }
}

//(int) (value1 + 0.5);