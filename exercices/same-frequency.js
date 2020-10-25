(function () {

    // Exercice: Write a function called sameFrequency. Given two positive integers
    // find out if the two numbers have the same frenquency of digits.

    //  Your solution must have the following complexities: O(N)

    // Sample Input:
    //      sameFrequency(182, 281) // true
    //      sameFrequency(34,14) // false
    //      sameFrequency(22,222) // false

    // Exercice by Colt Steele


    // How i will proceed ?

    // I have to verify if the number have the same length. We have two solutions:
    //      First we can convert the number to string and verify the length is correct
    //      the second solution is to use logarithm
    // If the length doesn't match, return false

    // I will convert the number to String then i will use the pattern frenquency counter
    // to store each digit in the key/value
    // After that, i will loop my object to see if the key of my first object exist in the second


    const sameFrequency = (nb1, nb2) => {
        
        if (nb1.toString().length !== nb2.toString().length) {
            return false;
        }

        const counter1 = {};
        const counter2 = {};

        nb1.toString().split('').forEach(value => {
            counter1[value] = (counter1[value] || 0) + 1
        });

        nb2.toString().split('').forEach(value => {
            counter2[value] = (counter2[value] || 0) +1;
        })

        for (let key in counter1) {
            if (!(key in counter2)) {
                return false;
            }
        }

        return true;
    }
})()