class TotalDivBY7
{
    public static void main(String ar[])
    {
        int i;
        System.out.println("No. divisible by 7 in between 100 and 200");
        for (i = 100; i <= 200; i++)
        {
            if (i % 7 == 0)
                System.out.print(i + ",");
        }
    }
}