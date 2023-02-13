// DIVIDE $ RULE / BINARY SEARCH - 0(log(n))
function binarySearch(arr, num) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let mp = Math.floor((min + max) / 2);
        if (arr[mp] < num) {
            min = mp + 1;
        } else if (arr[mp] > num) {
            max = mp - 1;
        }
        else {
            return mp;
        }
    }
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 11));