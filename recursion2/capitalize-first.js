(function () {

    // Exercice by Colt Steel
    // Write a recursive function called capitalizeFirst. Given an array
    // of strings, capitalize the first letter of each string in the array

    // What do I have to do ?
    // I need to create a capitalizeFirst (arr) function where arr is an array of string
    // Condition: Use recursivity


    const capitalizeFirst = (arr) => {
        if (arr.length === 0) return arr;
        arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
        return [arr[0], ...capitalizeFirst(arr.slice(1))]
    }

    console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana'])
})()    