(function () {

    // Exercice Colt Steel
    // Write a recursive function called someRecursive which accepts an array and
    // a callback. The function returns true if a single value in the array
    // return true when passed to the callback. Otherwise it returns false

    // What do I have to do ?
    // Create a someRecursive function with an array and a callback.
    // If an array value respects the callback condition, then return true

    // How will I do ?
    // Condition: Use a recursive
    // I will check that the first value respects the callback condition
    // If yes, return true
    // If not called the function by removing the value just tested
    // I decided to test from the last to the first for performance issues

    const someRecursive = (arr, cb) => {

        if (arr.length === 0) return false;

        if (cb(arr[arr.length - 1])) {
            return true;
        }

        return someRecursive(arr.slice(0, arr.length - 1), cb)
    }

    // SAMPLE INPUT / OUTPUT
    const isOdd = val => val % 2 !== 0;

    console.log(someRecursive([1, 2, 3, 4], isOdd)) // true
    console.log(someRecursive([4, 6, 8, 9], isOdd)) // true
    console.log(someRecursive([4, 6, 8], isOdd)) // false
    console.log(someRecursive([4, 6, 8], val => val > 10)) // false

})()
