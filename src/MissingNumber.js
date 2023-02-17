// 1 missing number from array
function MissingNumber(arr, n) {
    let total = n * (n + 1) / 2;
    let tp = arr.reduce((t, i) => t + i);
    return total - tp
}

//MULTIPLE MISSING NUMBERS
function findMissingNumbers(arr) {
    // Create sparse array with a 1 at each index equal to a value in the input.
    var sparse = arr.reduce((sparse, i) => (sparse[i] = 1, sparse), []);
    // Create array 0..highest number, and retain only those values for which
    // the sparse array has nothing at that index (and eliminate the 0 value).
    return [...sparse.keys()].filter(i => i && !sparse[i]);
}

var someArr = [2, 5, 3, 1, 4, 7, 10, 15]
var result = findMissingNumbers(someArr);
console.log(result);

function stockBuySell(A, n) {
    let i = 0;
    let res = [];
    while (i < n - 1) {
        while ((i < n - 1) && (A[i + 1] <= A[i]))
            i++;

        if (i == n - 1)
            break;
        let buy = i++;

        while ((i < n) && (A[i] >= A[i - 1]))
            i++;

        let sell = i - 1;
        res.push([buy, sell])
    }
    return res;
}