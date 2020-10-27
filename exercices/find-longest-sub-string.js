//sliding window pattern: https://levelup.gitconnected.com/an-introduction-to-sliding-window-algorithms-5533c4fe1cc7#:~:text=The%20Sliding%20Window%20algorithm%20is,capture%20different%20portions%20of%20it.

(function () {

    // Exercice 2:
    //  Given a string, find the length of the longest substring without repeating characters


    // Solution of Colt Steel

    // Create an function with string parameter
    // Create varaibles: start (Number), seen (Object), longest (Number)
    // Loop the string to store the current char
    // If we find the key of seen's variable then advance to the letter we found
    // Use Math.max to compare start and (i - start + 1). The last operation allowing to find how many loop with browse until the start.
    // If it's greater than the longest's value, then the new longest become the operation's value
    // Store the position of letter in seen's variable: seen[key] = i + 1;

    const findLongestSubString = (str) => {
        let start = 0;
        let seen = {};
        let longest = 0;

        for (let  i = 0; i < str.length; i++) {
            let char = str[i];

            if (seen[char]) {
                start = Math.max(start, seen[char])
            }

            longest = Math.max(longest, i - start + 1);
            seen[char] = i + 1;
        }

        return longest;
    }

    console.log(findLongestSubString('')) // 0;
    console.log(findLongestSubString('rithmschool')) // 7
    console.log(findLongestSubString('bbbbbb')) // 1
    console.log(findLongestSubString('longestsubstring')) // 8
    console.log(findLongestSubString('thisishowwedoit')) // 6

})()