(function() {

    // Exercice by Colt Steele:

    // Write a function called averagePair. Given a sorted array of integers
    // and a target average, determine if there is a pair of values in the array
    // where the average of the pair equals the target average. There may be more than one pair 
    // that matches the average target

    // Qu'est-ce que je dois faire ?
    // Créer une fonction qui prend en parametre un tableau de int et un float
    // Je vais utiliser le Multiples pointer pattern
    // Je créais une variable min et max pour parcourir mon tableau de gauche et de droite
    // Avant je regarde si ma valeur de gauche ou de droite n'est pas égale à mon float
    // Si ce n'est pas le cas, j'additionne la plus petite valeur du tableau (min) et le plus grand (max)
    // Si la somme est trop grande, je déinscrémente de un le max
    // Sinon j'incrémente le plus petit

    const averagePair = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            if (arr[left] === target || arr[right] === target) {
                return true;
            }
            const sum = (arr[left] + arr[right]) / 2;

            if (sum === target) {
                return true;
            } else if (sum > target) {
                right--
            } else {
                left++;
            }
        }

        return false;
    }
    
    console.log(averagePair([1,2,3], 2.5)); // expected: true
    console.log(averagePair([], 4)) // expected: false
    console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // expected: true
})()