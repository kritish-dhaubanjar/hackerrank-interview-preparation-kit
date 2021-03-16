#include <stdio.h>
#include <inttypes.h>

int *maxXor(int arr_count, int *arr, int queries_count, int *queries, int *result_count)
{

    for (int i = 0; i < queries_count; i++)
    {
        int max = INT32_MIN;
        for (int j = 0; j < arr_count; j++)
        {
            int temp = queries[i] ^ arr[j];
            if (temp > max)
                max = temp;
        }
        // printf("%d", max);
        queries[i] = max;
    }

    *result_count = queries_count;

    return queries;
}

int main()
{
    int result_count = -1;

    int arr[] = {1, 3, 5, 7};
    int queries[] = {17, 6};

    int *result = maxXor(4, arr, 2, queries, &result_count);

    for (int i = 0; i < result_count; i++)
    {
        printf("%d\n", result[i]);
    }

    return 0;
}