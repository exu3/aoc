import java.io.File;
import java.util.Scanner;
public class Whale {
    public static void main(String [] args) {
        readData();
    }

    public static void readData() {
        try {
            Scanner in = new Scanner(new File("example.txt"));
            
            int[] arr = new int[1000];           
            int n = 0;

            int i = 0;
            while (in.hasNext()) {
             n = in.nextInt();
             System.out.println(in.nextInt());
             arr[i] = n;
             i++;
            }

            System.out.println(arr[2]);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

