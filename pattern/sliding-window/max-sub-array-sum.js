//sliding window pattern: https://levelup.gitconnected.com/an-introduction-to-sliding-window-algorithms-5533c4fe1cc7#:~:text=The%20Sliding%20Window%20algorithm%20is,capture%20different%20portions%20of%20it.

(function () {

    // Exercice by Colt Steele:
    // Given an array of integers and a number, write a function called maxSubarraySum, 
    // which finds the maximum sum of a subarray with the length of the number passed to the function

    // Note that a subarray must consist of consecutive elements from the original array.
    // In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.


    // Qu'est-ce que je dois faire ?
    // Je dois créer une fonction maxSubarraySum(arr, n) où arr est un tableau de nombres et n est  un nombre
    // Je dois retourner la somme maximum du tableau par rapport à n

    // Pour résoudre le problème:
    // Je dois parcourir de 1 (currentIndex) à n en cumulant leur valeur
    // Ensuite de n à n * 2 en cumulant leur valeur etc...
    // Je m'arrête quand n + currentIndex > arr.length


    function maxSubarraySum(arr, n) {

        let currentIndex = 0;
        let sum = 0;
        let tempSum = 0;

        if (n <= 0 || n > arr.length) return null;

        while (n + currentIndex < arr.length) {
            tempSum += arr[currentIndex];
            currentIndex++;
            iteration++;
            if (currentIndex > 1 && n % currentIndex === 0) {
                sum = Math.max(sum, tempSum)
                tempSum = 0;
            }
        }



        // if (arr.length < num) return null;

        // let total = 0;
        // for (let i=0; i<num; i++){
        //    total += arr[i];
        // }
        // let currentTotal = total;
        // for (let i = num; i < arr.length; i++) {
        //    currentTotal += arr[i] - arr[i-num];
        //    total = Math.max(total, currentTotal);
        // }
        // return total;
    }

    console.log(maxSubarraySum([100, 200, 300, 400], 2)) // Expected 700
    // console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) // Expected 39
    // console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 4)) // Expected 5
    // console.log(maxSubarraySum([2, 3,], 3)) // Expected null


















    // How i will proceed ?
    /**
     * Je vais créer une fonction qui va prendre en parametre un tableau de int et n
     * Je veux récupérer la plus grande suite dans mon tableau en m'arretant à n
     * Je vais parcourir mes n premieres valeurs puis stocker la somme temporairement
     * Je vais avancer l'index de 1 puis calculer la somme de mes n valeur
     * Si la somme est supérieur à ma précedent somme, je stock cette somme
     * Je m'arrete quand mon la taille de mon tableau - l'index est inférieur à n
     */


    // const maxSubarraySum = (arr, n) => {

    //     if (n > arr.length) return null;

    //     let sum = 0;

    //     for (let i = 0; i < arr.length; i++) {
    //         let tempSum = 0;
    //         for (let j = i + 1; j <= n; j++) {
    //             tempSum += arr[i] + arr[j];
    //         }

    //         if (tempSum > sum) {
    //             sum = tempSum;
    //         }

    //         if (arr.length - i < n) {
    //             return sum;
    //         }
    //     }
    // }



})()