// LARGEST CONSECUTIVE SUM -O(n^2)
function largestSum(arr, num) {
    let max = 0;
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}
console.log(largestSum([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4));


// COMPLEXITY O(n)
function largestSumOp(arr, num) {
    let max = 0;
    let temp = 0;
    for (let i = 0; i < num - 1; i++) {
        temp += arr[i];
    }
    for (let i = num - 1; i < arr.length; i++) {
        temp += arr[i];
        if (temp > max) {
            max = temp;
        }
        temp -= arr[i - num + 1];
    }
    return max;
}
console.log(largestSumOp([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4));


// COMPLEXITY O(n) with ES6
const findSum = arr => arr.reduce((acc, val) => acc + val);
const largestSumReduce = (arr, num) => {
    let min = 0, max = min + num;
    let res = findSum(arr.slice(min, max));
    for (; max <= arr.length; max++, min++) {
        res = Math.max(findSum(arr.slice(min, max)), res);
    };
    return res;
};
console.log(largestSumReduce([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4));

//MAXIMUM contiguous SUBARRAY SUM
function maxSubarraySum(arr) {
    if (arr.length == 0)
        return 0;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > 0) {
            arr[i] += arr[i - 1];
        }
        max = Math.max(arr[i], max);
    }
    return max;
}
console.log(maxSubarraySum([1, -2, 3, -4, 3, 5, 4, 6, 7, -8]));

//MAXIMUM contiguous SUBARRAY 
function maxSubarraySum(a, size) {
    var max = 0,
        max_end = 0,
        start = 0,
        end = 0,
        s = 0;
    for (let i = 0; i < size; i++) {
        max_end += a[i];

        if (max < max_end) {
            max = max_end;
            start = s;
            end = i;
        }

        if (max_end < 0) {
            max_end = 0;
            s = i + 1;
        }
    }
    //return max;
    return a.slice(start, end + 1);

}
console.log(maxSubarraySum([1, -2, 3, -4, 3, 5, 4, 6, 7, -8], 10));


function longestSubstrDistinctChars(s) {
    if (s.length === 0)
        return 0;
    const n = s.length;
    const st = new Set();
    let len = 1;
    st.add(s[0]);
    let i = 1;
    let maxLen = 0;
    while (i < n) {
        // check if consiqutive chars are distinct and non repeating
        if (s[i] !== s[i - 1] && !st.has(s[i])) {
            st.add(s[i]);
            len++;
            i++;
            // back up the max length
            if (len > maxLen) {
                maxLen = len;
            }
        } else {
            // move forward for repeating chars
            if (len === 1) { i++; }
            else {
                // reset the substring and set the pivot for next sub string
                st.clear();
                i = i - len + 1;
                len = 0;
            }
        }
    }
    return maxLen || len;
}

// LARGEST SUBARRAY WITH 0 SUM
//O(N^2)
function maxLen(arr, N) {
    let max_len = 0;
    for (let i = 0; i < N; i++) {
        let curr_sum = 0;
        for (let j = i; j < N; j++) {
            curr_sum += arr[j];
            if (curr_sum == 0)
                max_len = Math.max(max_len, j - i + 1);
        }
    }
    return max_len;
}
//O(N)
function maxLen(arr, n) {
    let max = 0;
    let sum = 0;
    let map = new Map();

    for (let i = 0; i < n; i++) {
        sum += arr[i];
        if (arr[i] === 0 && max === 0) max = 1;
        if (sum === 0) max = i + 1;
        let prev = map.get(sum);

        if (prev != null) max = Math.max(max, i - prev);
        else map.set(sum, i);
    }
    return max;
}