(function () {

    // Exercice by Colt Steel
    // Write a function to sort an arry by using insert sort


    // What do I have to do ?
    // I have to create an insertSort (arr) function and that must return arr sorted
    // I will iterate over my arr from i = 1 to i <arr.length
    // Create position = i
    // As long as  position = 0
    // Interchange their value and deincrement position

    const insertionSort = (arr) => {

        for (let i = 1; i < arr.length; i++) {
            let position = i;
            while (position !== 0) {
                let isSwap = false;

                if (arr[position] < arr[position - 1]) {
                    let temp = arr[position - 1];
                    arr[position - 1] = arr[position];
                    arr[position] = temp;
                    isSwap = true;
                }
                position--;

                if (!isSwap) {
                    break;
                }
            }

        }
        return arr;
    }

    console.log(insertionSort([4, 5, 8, 1, 2, 6]));
    console.log(insertionSort([2, 1, 9, 76, 4]));
})()