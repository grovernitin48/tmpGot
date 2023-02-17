// O(N2)
function subarraySum(arr, n, sum) {
    for (let i = 0; i < n; i++) {
        let currentSum = arr[i];
        for (let j = i + 1; j < n; j++) {
            currentSum += arr[j];
            if (currentSum == sum) {
                return [i + 1, j + 1];
            }
        }
    }
    return [-1];
}
console.log(subarraySum([1, 2, 3, 7, 5], 5, 12))

// O(N)
function subarraySumOp(arr, n, sum) {
    let currentSum = arr[0], start = 0, i;
    for (i = 1; i <= n; i++) {
        // If currentSum exceeds the sum then remove the starting elements
        while (currentSum > sum && start < i - 1) {
            currentSum = currentSum - arr[start];
            start++;
        }
        // If currentSum becomes equal to sum then return indexes
        if (currentSum == sum) {
            return [start + 1, i];
        }
        // Add this element to currentSum
        if (i < n)
            currentSum = currentSum + arr[i];
    }
    return [-1];
}

console.log(subarraySumOp([1, 2, 3, 7, 5], 5, 12))