(function() {

    // Exercice: Given two strings, write a function to determine
    // if the second string is an anagram of the first

    // Anagram is a word, phrase or name formed by rearranging the letters of another
    // Example: cinemam and iceman

    // The exercice by Colt Steele on Udemy



    // How I proceed ?
    // Create an function taking two strings
    // Use the frenquency counter pattern to loop both string separatly
    

    const anagram = (word1, word2) => {

        const frenquencyCounter1 = {};
        const frequencyCounter2 = {}

        if (word1.length !== word2.length) {
            return false;
        }

        for (let value of word1) {
            frenquencyCounter1[value] = (frenquencyCounter1[value] || 0) + 1;
        }

        for (let value of word2) {
            frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
        }

        for (let key in frenquencyCounter1) {
            if (!(key in frequencyCounter2)) {
                return false;
            }

            if (frequencyCounter2[key] !== frenquencyCounter1[key]) {
                return false;
            }

        }
        return true;
    }

    console.log(anagram('ange', 'nage'))
})()