(function () {

    // Write a function to sort an array of integer
    // by finding the largest value to the smallest

    // How I will proceed ?
    // Create a function sort(arr)
    // Loop the arr starting to maximum size to 0;
    // Then create a loop inner the first loop starting 
    // from 0 to arr.length
    // Verify if the arr[j] > arr[j+1]
    // If true then change the value of arr[j] to [arrj+1] and vice versa


    // Improvement of algorithm
    // Create a isSwap variable into the first loop
    // If into the second value, we swap a value then isSwap = true
    // If into the first loop, we aren't swap then break (Meaning the arr has sorted)

    // Whenever we find the largest value in our unsorted array, we put 
    // it near the end  of the array. It is only necessary to the following
    // iteration, one checks these values.


    const sort = (arr) => {
        for (let i = arr.length; i > 0; i--) {
            let isSwap = false;
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    isSwap = true
                }
            }

            if (!isSwap) break;
        }
        return arr;
    }

    const swap = (arr, idx1, idx2) => {
        const temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    //with recursive
    const sort2 = (arr, n = arr.length) => {
        if (n === 1) {
            return arr;
        }

        for (let i = 0; i < n; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
            }
        }
        return bubbleSort(arr, n - 1)
    }

    // console.log(sort([8, 1, 2, 3, 6, 5, 4]));
    console.log(sort([8, 1, 2, 3, 4, 5, 6, 7]))
    console.log(sort2([8, 1, 2, 3, 4, 5, 6, 7]))
})()