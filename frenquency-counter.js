(function () {

    //Exercice: Create a function taking two arrays then compare if the value of one of the arrays is squared into the other
    // The frequency must be the same. Example: ([1,2,1] and [4, 4, 1]) is false because we have twice the number 4 but just a 2 in the first array
    // The squared number may be in the first or second array


    // What I want ?
    // Verify if the arrays is squared in the oter

    // How can I proceed ?
    // Create a function taking two arrays called same
    // If the length of arrays is not the same, return false
    // If the frequency of arrays is not correct, return false.
    // Loop the first array and check if I find the squared number into the second array. If not, check if the value of second array is squared of the first
    // Create a variable to store indexFound and after loop the second array, delete the value with slice
    // If any index was found, return false (Mean that's the current value haven't square into the other)


    const same = (arr1, arr2) => {
        if (arr1.length !== arr2.length) {
            return false;
        }

        for (let i = 0; i < arr1.length; i++) {
            let indexFound = null;
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] ** 2 === arr2[j] || arr1[i] === arr2[j] ** 2){
                    indexFound = j
                }
            }
            if (indexFound === null) {
                return false;
            }

            arr2 = arr2.filter((val, index) => index !== indexFound);
        }

        return true;
    }

    console.log(same([1, 2, 3], [4, 1, 9])) // true
    console.log(same([1, 2, 3], [1, 9])) // false (Not same length)
    console.log(same([1, 2, 1], [4, 4, 1])) // false (Not the same frequency)
})()
