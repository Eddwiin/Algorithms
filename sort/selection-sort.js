(function () {

    // Exercice by Colt Steel
    // Write a function to sort an array by finding
    // the small value up to largest

    // Qu'est-ce que je dois faire ?
    // Create a function selectionSort(arr)
    // Loop arr from 0 to arr.length
    // Create a min variable into the first loop to store temporaly the min value of the array  
    // and de position updated
    // Affect min = arr[i] and position = i
    // Create a second loop to iterate to j = i + 1 until j < arr.length
    // If arr[j] < min then min = arr[j] and position = j
    // When the second loop done, compare position !== i
    // If true then arr[position] = arr[i] and arr[i] = min



    const selectionSort = (arr) => {

        for (let i = 0; i < arr.length; i++) {
            let min = arr[i];
            let position = i;
            let isSwap = false;
            for (let j = i +1; j < arr.length; j++) {
                if (arr[j] < min) {
                    position = j;
                    min = arr[j];
                    isSwap = true;
                }
            }

            if (isSwap) {
                arr[position] = arr[i];
                arr[i] = min;
            } else {
                break;
            }
        }

        return arr;
    }

    console.log(selectionSort([34,22,10,19,17]));
})()