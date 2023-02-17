// PERMUTAION WITH O(N)
function permutation(param) {
    let len = param.length;
    let res = [param.slice()];
    let temp = new Array(len).fill(0);
    let i = 1, j, k;

    while (i < len) {
        if (temp[i] < i) {
            j = i % 2 && temp[i];
            k = param[i];
            param[i] = param[j];
            param[j] = k;
            ++temp[i];
            i = 1;
            res.push(param.slice());
        } else {
            temp[i] = 0;
            ++i;
        }
    }
    return res;
}

console.log(permutation('abcd'));
console.log(permutation([1, 2, 3, 4]));


// PERMUTAION WITH Recusrion
let str = 'abcd';
let allStr = []
function Permutations(str, result = '') {
    if (!str.length) {
        allStr.push(result)
    }
    for (let i = 0; i < str.length; i++) {
        let remStr = str.substr(0, i) + str.substr(i + 1);
        Permutations(remStr, result + str.substr(i, 1));
    }
}
Permutations(str)
console.log(allStr)


//COMBINATION WITH DIFFERENT ARRAYS recursion
var allArrays = [
    ['a', 'b'],
    ['c'],
    ['d', 'e', 'f']
]
function allPossibleCases(arr) {
    if (arr.length == 1) {
        return arr[0];
    } else {
        var result = [];
        var allCasesOfRest = allPossibleCases(arr.slice(1)); // recur with the rest of array
        for (var i = 0; i < allCasesOfRest.length; i++) {
            for (var j = 0; j < arr[0].length; j++) {
                result.push(arr[0][j] + allCasesOfRest[i]);
            }
        }
        return result;
    }
}
console.log(allPossibleCases(allArrays))


//COMBINATION WITH REDUCE
const arr1 = ['a', 'b', 'c', 'd'];
const arr2 = ['1', '2', '3'];
const arr3 = ['x', 'y',];

const all = [arr1, arr2, arr3];

const output = all.reduce((acc, cu) => {
    let ret = [];
    acc.map(obj => {
        cu.map(obj_1 => {
            ret.push(obj + obj_1)
        });
    });
    return ret;
})

console.log(output);

