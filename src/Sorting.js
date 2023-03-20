// BUBBLE SORT - Complexity O(n^2)
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        let isSwapped = false;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return arr;
}
console.log(bubbleSort([4, 5, 79, 31, 3, 1, 2, 9, 5, 2, 12, 45, 7, 2, 1]));

// SELECTION SORT - Complexity O(n^2)
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        let temp;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
console.log(selectionSort([4, 5, 79, 31, 3, 1, 2, 9, 5, 2, 12, 45, 7, 2, 1]));

// INSERTION SORT - Complexity O(n^2)
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > curr) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = curr;
    }
    return arr;
}
console.log(insertionSort([4, 5, 79, 31, 3, 1, 2, 9, 5, 2, 12, 45, 7, 2, 1]));

// MERGE - Complexity O(nlog(n))
// Split the array into halves and merge them recursively 
function mergeSort(arr) {
    if (arr.length === 1) {
        // return once we hit an array with a single item
        return arr
    }

    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            indexLeft++
        } else {
            result.push(right[indexRight])
            indexRight++
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]


// QUICK

// SORT WITH FREQUENCY OF NUMBER
const frequencySort = function (arr) {
    let map = {};
    for (let item of arr) {
        map[item] = map[item] + 1 || 1;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            let temp = 0;
            if (map[arr[j]] === map[arr[j + 1]]) {
                temp = arr[j] - arr[j + 1]
            } else {
                temp = map[arr[j]] - map[arr[j + 1]]
            }
            if (temp > 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};
console.log(frequencySort([2, 1, 9, 1, 2, 5, 1, 6, 1]));  //[5, 6, 9, 2, 2, 1, 1, 1, 1]
