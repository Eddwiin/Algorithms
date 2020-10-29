// multiples pointers: https://medium.com/@seanoughton/problem-solving-patterns-multiple-pointers-2dae827d154d

(function () {
    // Exercice from Colt Steele:
    // Implements a function called countUniqueValue,
    // which accepts a sorted Array, and counts the unique value in
    // the Array. There can be negative numbers in the Array, but it 
    // will always be sorted

    // How I will proceed ?
    // Use the multiple pointers to find unique value of the array
    // Put left's variable to 0 and check with the next value if it's the same or not
    // If it's the same, I increase right's variable to one
    // If it's different, I increase my uniqueVariableSum and my left's variable to oen

    const countUniqueValues = (array) => {

        let frequencyCounter = {}

        for (let value of array) {
            frequencyCounter[value] = (frequencyCounter[value] || 0) + 1;
        }

        return Object.keys(frequencyCounter).length;
    }



    //Solution of Colt Steele:
    const countUniqueValues2 = (arr) => {
        let i = 0;

        for (let j = 1; j < arr.length; j++) {
            if (arr[i] !== arr[j]) {
                i++;
                arr[i] = arr[j];
            }
        }
    }

    console.log(countUniqueValues([-2, -1, -1, 0, 1]));



})()