function reverseSubArray(arr, n, k) {
    for (let i = 0; i < n; i += k) { // IMPORTANT
        let left = i;
        let right = Math.min(i + k - 1, n - 1);
        let temp;
        while (left < right) {
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left += 1;
            right -= 1;
        }
    }
    return arr;
}
console.log(reverseSubArray([1, 2, 3, 4, 5, 6], 6, 3));



// firstElement repeated k times
function firstElementKTime(arr, n, k) {
    let map = {};
    for (let el of arr) {
        map[el] = map[el] + 1 || 1;
        if (map[el] >= k)
            return el;
    }
    return -1;
}

