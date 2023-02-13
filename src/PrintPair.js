let arr = [1, 6, 4, 45, -6, 10, 8, -8];
let sum = 16;

// O(n^2)
function printPair(arr, sum) {
    for (element of arr) {
        for (j = 1; j < arr.length; j++) {
            if (element + arr[j] === sum) {
                console.log("1 -> ", [element, arr[j]]);
                return;
            }
        }
    }
}
printPair(arr, sum);

// If Sorted, O(n)
function printPair2(arr, sum) {
    let a = arr.sort();
    let left = 0;
    let right = a.length - 1;
    let res;

    while (left < right) {
        res = a[left] + a[right];
        if (res === sum) {
            console.log("2 -> ", [a[right], a[left]]);
            return;
        } else if (res > sum) {
            right--;
        } else {
            left++;
        }
    }
}
printPair2(arr, sum);


// 0(n) Without Sorted
function printpairs4(arr, sum) {
    let s = new Set();
    for (let i = 0; i < arr.length; ++i) {
        let temp = sum - arr[i];
        if (s.has(temp)) {
            console.log("4 -> ", [arr[i], temp]);
            return;
        }
        s.add(arr[i]);
    }
}
printpairs4(arr, sum);

// IF SOME = 0, to same -ve +ve elements
function printPair3(arr) {
    let pair = {};
    for (let i = 0; i < arr.length; i++) {
        let x = -arr[i];
        if (pair[x]) {
            // if x is present in pair map
            return [x, arr[i]];
        }
        pair[arr[i]] = 1;
    }

    return [];
}

console.log(printPair3(arr));