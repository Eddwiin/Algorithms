(function() {

    // Exercice by Colt Steele:

    // Write a function called averagePair. Given a sorted array of integers
    // and a target average, determine if there is a pair of values in the array
    // where the average of the pair equals the target average. There may be more than one pair 
    // that matches the average target

    // How i will proceed ?
    // Create a function taking array of int sorted and a target average
    // Use Multiples pointer pattern
    // Create a variable "left" to store the min index and a variable "right" to store the max
    // In the "While", I will check that the value of my array[left] or array[right] is equal to the target average
    // If yes, I return true. If not, I'm going store: sum = (array[left] + array[right]) / 2
    // Then I will check if the target average is equal to target average in parameter
    // If the sum is lower than target's parameter, I have to increase the left
    // If the sum is greater than target's parameter, I have to deincrement right

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