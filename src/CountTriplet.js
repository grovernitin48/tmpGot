//O(N2)
function countTriplet(arr, n) {
    let count = 0;
    let freq = new Array(20).fill(0);
    for (let i = 0; i < n; i++) {
        freq[arr[i]]++;
    }
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (freq[arr[i] + arr[j]]) {
                count++;
            }
        }
    }
    return count;
}

console.log(countTriplet([1, 2, 3, 4, 5], 5))