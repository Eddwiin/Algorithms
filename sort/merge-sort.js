(function () {

    // Exercice by Colt Steel
    // Sort an array with merge pattern

    // Qu'est-ce que je dois faire ?
    // Je dois passer deux tableaux de nombres qui doivent me retourner un nouveau tableau des deux et trié

    // How will I do ?
    // I will create a mergeSort function (arr1, arr2)
    // Create a results variable which will be returned at the end of the function
    // Create a variable i and j which will be the indexes of arr1 and arr2 respectively
    // Use a while which will stop when i === arr1.length and j === arr2.length
    // If arr2 [j]> arr1 [i] then add arr1 [i] in results and increment i
    // Otherwise do the opposite
    // If j> i then add arr2 [j] at the end in the newArr
    // Otherwise do the opposite

    const merge = (arr1, arr2) => {
        let results = [];
        let i = 0;
        let j = 0;

        while (i < arr1.length && j < arr2.length) {
            if (arr2[j] > arr1[i]) {
                results = [...results, arr1[i]];
                i++;
            } else {
                results = [...results, arr2[j]];
                j++;
            }
        }

        if (i < arr1.length) {
            results = [...results, ...arr1.splice(i)]
        }

        if (j < arr2.length) {
            results = [...results, ...arr2.splice(j)]
        }

        return results;
    }

    // console.log(merge([1, 10, 50], [2, 14, 99, 100]));


    // Solution of Colt Steel:

    const mergeSort = (arr) => {
        if (arr.length <= 1) return arr;
        let mid = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, mid))
        let right = mergeSort(arr.slice(mid));
        return merge(left, right)
    }

    console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]))
})()