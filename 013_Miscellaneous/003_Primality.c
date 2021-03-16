#include <stdio.h>
#include <math.h>

char *primality(int n)
{
    if (n == 1)
        return "Not prime";

    for (int i = 2; i < (int)sqrt(n) + 1; i++)
    {
        if (n % i == 0)
        {
            return "Not prime";
        }
    }

    return "Prime";
}

int main()
{
    printf("%s\n", primality(12));
    printf("%s\n", primality(5));
    printf("%s\n", primality(7));
    printf("%s\n", primality(2));
    printf("%s\n", primality(1));
    printf("%s\n", primality(1000000007));
    printf("%s\n", primality(100000003));
    printf("%s\n", primality(1000003));
    return 0;
}