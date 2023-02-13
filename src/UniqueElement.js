// COUNT UNIQUE CONSECUTIVE SORTED O(n)
function countUnique(arr) {
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}
console.log(countUnique([1, 1, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 9, 9]))

// O(n2) complexity
const a = [6, 10, 5, 4, 9, 120, 4, 6, 10];
function printDistinct(arr, n) {
    for (let i = 0; i < n; i++) {
        var j; // Check if the picked element is already printed
        for (j = 0; j < i; j++) if (arr[i] == arr[j]) break;
        // If not printed earlier, then print it
        if (i == j) console.log(arr[i] + " ");
    }
}

printDistinct(a, a.length);

// Basic Way O(n)
const filterUnique = (a) => {
    const obj = {};
    //Iterating through loop and adding keys to the object{object always have unique keys}
    for (let i = 0; i < a.length; i++) {
        obj[a[i]] = i;
    }
    return Object.keys(obj).map((val) => parseInt(val, 10));
};
console.log(filterUnique(a));

// USING FILTER and INDEXOF
// iterating array and passing third param of the filter function(array itself),
// indexOF will return index of the element(first occurence)
// if index of our firt iterator equals index of second iterator(indexOf), then
// its a uniques element otherwise its a duplicatte
// Filter function returns the array which satisfies the condition mentioned inside
console.log(a.filter((el, ind, arr) => arr.indexOf(el) === ind));

