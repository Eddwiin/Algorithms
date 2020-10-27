//sliding window pattern: https://levelup.gitconnected.com/an-introduction-to-sliding-window-algorithms-5533c4fe1cc7#:~:text=The%20Sliding%20Window%20algorithm%20is,capture%20different%20portions%20of%20it.

(function () {

    // Exercice by Colt Steele:
    // Given an array of integers and a number, write a function called maxSubarraySum, 
    // which finds the maximum sum of a subarray with the length of the number passed to the function

    // Note that a subarray must consist of consecutive elements from the original array.
    // In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

    // How i will proceed ?
    /**
     * Je vais créer une fonction qui va prendre en parametre un tableau de int et n
     * Je veux récupérer la plus grande suite dans mon tableau en m'arretant à n
     * Je vais parcourir mes n premieres valeurs puis stocker la somme temporairement
     * Je vais avancer l'index de 1 puis calculer la somme de mes n valeur
     * Si la somme est supérieur à ma précedent somme, je stock cette somme
     * Je m'arrete quand mon la taille de mon tableau - l'index est inférieur à n
     */


    const maxSubarraySum = (arr, n) => {

        if (n > arr.length) return null;

        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            let tempSum = 0;
            for (let j = i + 1; j <= n; j++) {
                tempSum += arr[i] + arr[j];
            }

            if (tempSum > sum) {
                sum = tempSum;
            }

            if (arr.length - i < n) {
                return sum;
            }
        }
    }

    console.log(maxSubarraySum([100, 200, 300, 400], 2)) // Expected 700
    console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) // Expected 39
    console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 4)) // Expected 5
    console.log(maxSubarraySum([2, 3,], 3)) // Expected null


})()