(function() {

    // Exercice by Colt Steel
    // Write a function to sort an arry by using insert sort
    

    // Qu'est-ce que je dois faire ?
    // Je dois créer une fonction insertionSort(arr) et qui dois retourner arr trié
    // Je vais parcourir mon arr de i = 1 à i < arr.length
    // Create position = i
    // Tant que arr[position] < arr[position-i] && position = 0
    // Faire interchanger leur valeur et déincrémenter position


    const insertionSort = (arr) => {

        for (let i = 1; i < arr.length; i++) {
            let position = i;
            while (position !== 0) {
                let isSwap = false;

                if (arr[position] < arr[position-1]) {
                    let temp = arr[position-1];
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

    console.log(insertionSort([4,5,8,1,2,6]));
    console.log(insertionSort([2,1,9,76,4]));
})()