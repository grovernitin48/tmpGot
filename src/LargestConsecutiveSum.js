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