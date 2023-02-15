//PROBLEM 1

let str = 'abcd';
let allStr = []
// Calling the function recursively with default value of result as empty, if not available.
function Permutations(str, result = '') {
    // Base Condition of recursion
    if (!str.length) {
        allStr.push(result)
    }

    //Looping through all characters of str with calling the same function with extracting the main
    //string using substring
    for (let i = 0; i < str.length; i++) {
        let remStr = str.substr(0, i) + str.substr(i + 1);
        Permutations(remStr, result + str.substr(i, 1));
    }
}
Permutations(str)
console.log(allStr)


//PROBLEM 2
// This is also by implemented with recusrsion
let resultArr = [];
const arrCombination = (arr, sum, temp = [], sumLocal = 0) => {
    if (sumLocal < sum) {
        // looping all elements of array and calling the function again with slicing the main array dynamically 
        arr.forEach((num, i) =>
            arrCombination(arr.slice(i + 1), sum, temp.concat([num]), sumLocal + num));
    }

    else if (sumLocal == sum) {
        resultArr.push([temp]);
    }

}
arrCombination([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)

console.log(resultArr);
