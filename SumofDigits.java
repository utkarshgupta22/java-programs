public class SumofDigits {
    public static void main(String args[]) {
        int a = 556;

        int sum = 0;
        while (a != 0) {
            sum += a % 10;
            a /= 10;
        }

        System.out.println("sum is " + sum);
    }
}
