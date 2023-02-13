// IS ANAGRAM ? O(n2) due to sort
const isAnagram = (str1, str2) => {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(isAnagram('hello', 'llohe'));

// IS ANAGRAM ? O(n)
const isAnagram2 = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    let count = {};
    for (let char of str1) {
        count[char] = count[char] + 1 || 1;
    }
    for (let char of str2) {
        if (!count[char]) {
            return false;
        }
        count[char] -= 1;
    }
    return true;
}

console.log(isAnagram2('hello', 'llohe'));

// GROUP ANAGRAMS TOGETHER IN ARRAY
const arr = ["dell", "monk", "nkom", "cbb", "ledl", "llde", "konm", "bbc"];
let anagram = {};

for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    const sortedWord = word.split("").sort().join("");
    let tempArray = [];
    if (anagram[sortedWord]) {
        tempArray =
            anagram[sortedWord].length == 1
                ? anagram[sortedWord]
                : [...anagram[sortedWord]];
        tempArray.push(word);
        anagram[sortedWord] = tempArray;
    } else {
        anagram[sortedWord] = [word];
    }
}
console.log(Object.values(anagram));

//GENERATE ANAGRAMS AND return array with all anagrams grouped together
var animals = ["cat", "dog", "tac", "god", "act"];

var allAnagrams = function (arr) {
    var anagrams = {};
    arr.forEach(function (str) {
        var recurse = function (ana, str) {
            if (str === "") anagrams[ana] = 1;
            for (var i = 0; i < str.length; i++)
                recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1));
        };
        recurse("", str);
    });
    return Object.keys(anagrams);
};

console.log(allAnagrams(animals));  