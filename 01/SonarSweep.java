import java.io.File;
import java.util.Scanner;

public class SonarSweep {
    public static void main(String [] args) {
        readData();
    }

    public static void readData() {
        try {
            Scanner in = new Scanner(new File("input.txt"));

            String depth = "";
            int[] arr = new int[2000];
            int counter = 0;

            int i = 0;
            while (in.hasNextLine()) {
                // make an array with all the values from the file
                depth = in.nextLine();
                int d = Integer.parseInt(depth); // make them integers in order to compare them
                arr[i] = d;
                i++;
            }

            for (int j = 0; j < arr.length-1; j++) {
                if (arr[j] < arr[j+1]) {
                    counter++;
                }
            }
            System.out.println(counter);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
