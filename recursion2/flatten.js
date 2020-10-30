(function () {

    // Exercice Colt Steel
    // Write a recursive function called flatten which accepts an array
    // of arrays and returns a new array with all values flattened

    // What do I have to do ?
    // I have to create a flatten function which takes as parameter an array which can be
    // even contain an array.
    // I have to iterate through each sub-array to group into a single array

    // How will I do ?
    // Condition: use a recursive
    // I will browse my array
    // When I find a value other than a sub-array, I store it in my new array
    // If I find a sub-array, I call my recursive function by passing my sub-array as a parameter

    const flatten = (arr) => {
        let newArr = [];

        const browse = (arr) => {
            for (let i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i])) {
                    browse(arr[i])
                } else {
                    newArr = [...newArr, arr[i]]
                }
            }

            return newArr
        }

        return browse(arr);
    }

    console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
    console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
    console.log(flatten([[1], [2], [3]])) // [1,2,3]
    console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]


    // Solution of Colt Steel: 
    // function flatten(oldArr){
    //     var newArr = []
    //         for(var i = 0; i < oldArr.length; i++){
    //           if(Array.isArray(oldArr[i])){
    //                 newArr = newArr.concat(flatten(oldArr[i]))
    //           } else {
    //                 newArr.push(oldArr[i])
    //           }
    //     } 
    //     return newArr;
    //   }
})()