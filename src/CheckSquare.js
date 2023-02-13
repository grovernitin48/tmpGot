// Complexity O(n^2)
function checkSquare(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let flag = false;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] * arr1[i] === arr2[j]) {
                flag = true;
            }
            if (j === arr2.length - 1) {
                if (!flag) return false;
            }
        }
    }
    return true;
}
console.log(checkSquare([1, 2, 2, 4], [1, 4, 4, 25]));

// Complexity O(n)
function checkSquareOp(arr1, arr2) {
    let map1 = {}, map2 = {};
    for (let el of arr1) {
        map1[el] = map1[el] + 1 || 1;
    }
    for (let el of arr2) {
        map2[el] = map2[el] + 1 || 1;
    }
    for (let key in map1) {
        if (!map2[key * key]) return false;
        if (map1[key] !== map2[key * key]) return false;
    }
    return true;
}
console.log(checkSquareOp([1, 2, 2, 4], [1, 4, 4, 25]));




