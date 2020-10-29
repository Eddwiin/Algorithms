(function () {

    // Exercice by Colt Steel
    // Write a function called binarySearch which accepts a sorted array and 
    // a value and returns the index at which the value exists.
    // Otherwise, return -1;

    // What do I have to do?
    // I need to create a binarySearch (arr, value) function where arr is a sorted array
    // and value is the value we are looking for in the array
    // If I can't find anything, then return -1;

    // How will I do?
    // I will create a variable on the left to store the index of the minimum of the interval
    // I will create a variable on the right to store the index of the maximum of the interval
    // I will create a middle variable to store the index of the middle of my array
    // Then I have to compare arr [middle] with value:
    // If arr [middle] <value then right = middle
    // If arr [middle]> value then left = middle
    // If arr [middle] === value then return middle;
    // If left <= right stop de loop
    // If the array is degraded, we must take the values ​​above when we want to assign middle

    
    const binarySearch = (arr, val) => {
        let left = 0;
        let right = arr.length - 1;
        let middle = Math.floor((left + right) / 2);

        while (arr[middle] !== val && left <= right) {
            if (val < arr[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
            middle = Math.floor((left + right) / 2);
        }
        return arr[middle] === val ? middle : -1;
    }

    console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
    console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
    console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
    console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
    console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)); // 16
})()