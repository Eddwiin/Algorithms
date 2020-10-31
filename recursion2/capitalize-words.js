(function () {

    // Exercice Colt Steel
    // Write a recursive function called capitalizeWords. Given an array
    // of words, return a new array containing each word capitalized

    /// What do I have to do ?
    // Create a capitalizeWords (arr) function where arr is a collection
    // of string which represents words
    // I must return them to uppercase

    const capitalizeWords = (arr) => {
        if (arr.length === 0) return arr;
        arr[0] = arr[0].toUpperCase()
        return [arr[0], ...capitalizeWords(arr.slice(1))];
    }

    let words = ['i', 'am', 'learning', 'recursion'];
    console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
})()