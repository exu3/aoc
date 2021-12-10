import java.io.File;
import java.util.Arrays;
import java.util.Scanner;
import java.util.stream.*;


public class Segments {
  
    public static void main(String [] args) {
        readData();
    }

    public static void readData() {
        try {
            Scanner in = new Scanner(new File("example.txt"));
            int noLines = 10;
            String[] arr = new String[noLines];           
            String line;

            int counter = 0;

            int i = 0;
            while (in.hasNextLine()) {
             line = in.nextLine();
            //  System.out.println(line);
             arr[i] = line;
             i++;
            }

            // Make it only the output part
            for (int j=0; j<arr.length; j++) {
                arr[j] = arr[j].substring(60, arr[j].length());
                arr[j].split(" ");
                System.out.println(arr[j]);
            }

            String segmentString = "hi";
            if (segmentString.length() == 2) {
                counter ++;
            } else if (segmentString.length() == 4) {
                counter ++;
            } else if (segmentString.length() == 3) {
                counter ++;
            } else if (segmentString.length() == 7) {
                counter ++;
            } else {
                // nothing
            }
            System.out.print(counter);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
