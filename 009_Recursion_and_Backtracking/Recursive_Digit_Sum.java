public class Recursive_Digit_Sum {

    static int superDigit(String n, int k) {
        if (n.length() > 1) {
            long sum = 0;
            for (char ch : n.toCharArray()) {
                sum += Character.getNumericValue(ch);
            }
            return superDigit(String.valueOf(sum * k), 1);
        } else {
            return Integer.parseInt(n);
        }
    }

    public static void main(String[] args) {
        System.out.println(superDigit(
                "3546630947312051453014172159647935984478824945973141333062252613718025688716704470547449723886626736",
                100000));
    }

}