(function () {

    // Exercice by Colt Steele

    // Write a function called isSubsequence which takes in two strings and 
    // checks whether the characters in the first string form a subsequence of
    // the characters in the second string. In other words, the function should check
    // whether the characters in the first string appear somewhere
    // in the second string, without their order changing

    //How i will proceed ? 

    // I will use the Multiple pointer pattern
    // I have to create a function taking two strings

    // How i will proceed ?
    // Convert my two variable's strings to an array of string
    // Looking the position of my letter in the second and store the index in the variable called "previousIndex"
    // Loop the rest of the letter and check if the currentIndex is smaller than previousIndex
    // If yes,  return false (mean that's the order is not good);

    const checkIndex = (arr1, arr2) => {
        let previousIndex = null;
        for (let i = 0; i < arr1.length; i++) {
            let currentIndex = arr2.indexOf(arr1[i]);

            if (currentIndex < previousIndex) {
                return false;
            } else {
                previousIndex = currentIndex;
            }
        }

        return true;
    }

    const isSubsequence = (str1, str2) => {
        const str1Arr = str1.split('');
        const str2Arr = str2.split('')

        return (str1Arr.length < str2Arr.length)
            ? checkIndex(str1, str2)
            : checkIndex(str2, str1)
    }

    console.log(isSubsequence('hello', 'hello world')); // Expected true
    console.log(isSubsequence('sing', 'sting')) // Expected true;
    console.log(isSubsequence('sing', 'string')); // Expected true
    console.log(isSubsequence('abc', 'abracadabra')); // Expected true
    console.log(isSubsequence('abc', 'acb')) // false (order matter)
    console.log(isSubsequence('test', 'rest')) // Expected false


    // SOLUTION OF COLT:

    function isSubsequence2(str1, str2) {
        var i = 0;
        var j = 0;
        if (!str1) return true;
        while (j < str2.length) {
          if (str2[j] === str1[i]) i++;
          if (i === str1.length) return true;
          j++;
        }
        return false;
      }
})()