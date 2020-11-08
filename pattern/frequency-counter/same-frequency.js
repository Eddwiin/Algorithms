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
        if (nb1 < 0 || nb2 < 0) return false;

        const nb1Str = nb1.toString();
        const nb2Str = nb2.toString();

        if (nb1Str.length !== nb2Str.length) return false;

        let counter1 = {};
        let counter2 = {};

        for (let i = 0; i < nb1Str.length; i++) {
            counter1[nb1Str[i]] = (nb1Str[i] || 0) + 1;
        }

        for (let i = 0; i < nb2Str.length; i++) {
            counter2[nb2Str[i]] = (nb2Str[i] || 0) + 1;
        }

        for (key in counter1) {
            if (!(key in counter2)) {
                return false;
            }
        }

        return true;
    }



    console.log(sameFrequency(182, 281)); // true
    console.log(sameFrequency(34, 14)); // false
    console.log(sameFrequency(3589578, 5879385)); // true
    console.log(sameFrequency(22, 222)); // false

})()