#include <stdio.h>

long flippingBits(long n)
{
    return n ^ 4294967295; //XOR
}

int main()
{
    printf("%ld\n", flippingBits(2147483647));
    printf("%ld\n", flippingBits(4));
    return 0;
}