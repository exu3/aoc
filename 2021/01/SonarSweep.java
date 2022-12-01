import java.io.File;
import java.util.Scanner;
public class SonarSweep {
    public static void main(String [] args) {
        readData();
    }

    public static void readData() {
        try {
            Scanner in = new Scanner(new File("input.txt"));

            int d = 0;
            int[] arr = new int[2000];
            int counter = 0;
            int threescounter = 0;

            int i = 0;
            while (in.hasNextLine()) {
                d = in.nextInt();
                arr[i] = d;
                i++;
            }

            for (int j = 0; j < arr.length-1; j++) {
                if (arr[j] < arr[j+1]) {
                    counter++;
                }
            }

            int m = 0;
            while (m < arr.length-3) {
                if ((arr[m] + arr[m+1] + arr[m+2]) < (arr[m+1] + arr[m+2] + arr[m+3]))
                    threescounter ++;
                m++;
            }
            System.out.println("There are " + counter + " measurements larger than the preivous.");
            System.out.println("There are " + threescounter + " sums that are larger than the preivous sum.");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
