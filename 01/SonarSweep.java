import java.io.File;
import java.util.Scanner;
public class SonarSweep {
    public static void main(String [] args) {
        readData();
        windows();
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
            System.out.println("There are " + counter + " measurements larger than the preivous.");


        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    public static void windows() {
        try {
            Scanner in = new Scanner(new File("input.txt"));
            
            String depth = "";
            int[] arr = new int[2000];
            int[] threes = new int[2000];

            int i = 0;

            while (in.hasNextLine()) {
                depth = in.nextLine();
                int d = Integer.parseInt(depth);
                arr[i] = d;
                i++;
            }
             
            int threesum = 0;

            for (int j = 0; j < 665; j+=3) { // this part is supposed to put all the three sums into an array so that they can be compared. except they can't have any zeros
                threesum = arr[j] + arr[j+1] + arr[j+2];
                threes[j] = threesum;
            }

            // remove all the zeros in the array, make a new array
            // int targetIndex = 0;
            // for (int sourceIndex = 0; sourceIndex < threes.length; sourceIndex++) {
            //     if ( threes[sourceIndex] != 0 ) {
            //         threes[targetIndex++] = threes[sourceIndex];
            //     }
            // }
            // int[] newThrees = new int[targetIndex];
            // System.arraycopy(threes, 0, newThrees, 0, targetIndex);

            // count the number of increases
            int counter = 0;

            for (int m = 0; m < threes.length-1; m++) {
                if (threes[m] < threes[m+1]) {
                    counter++;
                }
            }
            System.out.println(arr[3] + arr[4] + arr[5]);
            System.out.println(threes[1]);
            System.out.println(counter);

        } catch (Exception e) {
            e.printStackTrace();
        }
     }
}
