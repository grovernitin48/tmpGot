// program to check if the string is palindrome or not
function checkPalindrome(string) {
    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// Brute Force longest palindrome subString with its length
// Time complexity: O(n^3). Space Complexity O(1)
function longestPalStr(str) {
    // All subStrings of length 1 are palindromes
    let longPalLength = 1,
        start = 0;
    // Nested loop to mark start and end index
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let flag = 1;
            // Check palindrome
            for (let k = 0; k < (j - i + 1) / 2; k++)
                if (str[i + k] != str[j - k]) flag = 0;

            // Palindrome
            if (flag != 0 && j - i + 1 > longPalLength) {
                start = i;
                longPalLength = j - i + 1;
            }
        }
    }
    let result = "";
    let end = start + longPalLength - 1;
    for (let i = start; i <= end; ++i) {
        result += str[i];
    }
    console.log(result, longPalLength);
}
longestPalStr("forgeeksskeegfor");


//Optimised Time complexity: O(n^2). Space Complexity O(1)
// First find all even length and odd length palindromes, keep track of the longest palindrome
// For Odd, fix i as the center and expand in both directions as i1 = i+1 and i2 = i-1
// Compare i1, i2 if equal then --i2 and ++i1 and find maximum length.
// For Even,i1 = i and i2 = i-1, find maximum length.
function longestPalStrOp(str) {
    let longPalLength = 1;
    let start = 0;
    let len = str.length;
    let low, high;
    //1by1 consider every char as center of even

    for (let i = 1; i < len; ++i) {
        //longest even palindrome
        low = i - 1;
        high = i;
        while (low >= 0 && high < len && str[low] == str[high]) {
            --low;
            ++high;
        }
        ++low;
        --high;
        if (str[low] == str[high] && high - low + 1 > longPalLength) {
            start = low;
            longPalLength = high - low + 1;
        }

        // longest odd length pal with center as i

        low = i - 1;
        high = i + 1;
        while (low >= 0 && high < len && str[low] == str[high]) {
            --low;
            ++high;
        }
        ++low;
        --high;
        if (str[low] == str[high] && high - low + 1 > longPalLength) {
            start = low;
            longPalLength = high - low + 1;
        }
    }
    let result = "";
    let end = start + longPalLength - 1;
    for (let i = start; i <= end; ++i) {
        result += str[i];
    }
    console.log(result, longPalLength);
}
longestPalStrOp("forgeeksskeegfor");


// TIME COMPLEXITY -> (nLogn)
function longestPalindromicOpp(S) {
    // Initialize a hash table H with size n and fill it with 0
    let n = S.length;
    let hash_table = new Array(n).fill(0);
    let isPalindrome = true;

    // Iterate through each character in string S & store its index in hash table 
    for (let i = 0; i < n; i++)
        hash_table[S[i].charCodeAt(0) - 'a'.charCodeAt(0)] = i;

    // Initialize start and end indices of longest palindromic substring
    let start = 0, end = 0;

    // Iterate through each character in string S
    for (let i = 0; i < n; i++) {

        // Check if its corresponding index in hash table is greater than 0
        if (hash_table[S[i].charCodeAt(0) - 'a'.charCodeAt(0)] > 0) {
            // Calculate the length of the palindrome
            let len = hash_table[S[i].charCodeAt(0) - 'a'.charCodeAt(0)] - i;

            // Check if the substring between
            // the current character and the
            // corresponding index in the
            // hash table is a palindrome
            isPalindrome = true;
            for (let j = 0; j < len; j++) {
                if (S[i + j] != S[hash_table[S[i].charCodeAt(0) - 'a'.charCodeAt(0)] - j]) {
                    isPalindrome = false;
                    break;
                }
            }

            // If substr b/w current character & corresponding index in hash table is a palindrome, then
            // update start and end indices of longest palindromic substring
            if (isPalindrome && len > end - start) {
                start = i;
                end = hash_table[S[i].charCodeAt(0) - 'a'.charCodeAt(0)];
            }
        }
    }

    // Return the longest palindromic substring
    if (isPalindrome) {
        return S.substring(start, end + 1);
    }
    else {
        return "not possible";
    }
}
console.log(longestPalindromicOpp("forgeeksskeegfor"));





