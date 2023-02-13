Array.prototype.mySort = function (compareFn) {
    return mergeSort(this)
    function mergeSort(arr) {
        if (arr.length === 1) {
            return arr
        }
        const middle = Math.floor(arr.length / 2)
        const left = arr.slice(0, middle)
        const right = arr.slice(middle)
        return merge(
            mergeSort(left),
            mergeSort(right)
        )
    }
    function merge(left, right) {
        let result = []
        let indexLeft = 0
        let indexRight = 0
        while (indexLeft < left.length && indexRight < right.length) {
            let _left = left[indexLeft]
            let _right = right[indexRight]
            if (compareFn)
                compareFn = composeCompareFn(compareFn(left, right))
            compareFn = (l, r) => l < r
            if (compareFn(_left, _right)) {
                result.push(left[indexLeft])
                indexLeft++
            } else {
                result.push(right[indexRight])
                indexRight++
            }
        }
        return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
    }
    function composeCompareFn(compareResult) {
        if (Math.sign(compareResult) == -1)
            return false
        if (Math.sign(compareResult) == 1)
            return true
        if (compareResult == 0)
            return false
    }
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(list.mySort())
console.log(list.mySort((a, b) => a - b))
const str = ["c", "a", "e"]
console.log(str.mySort())