(function () {

    // Exercice: implement a function called, areThereDuplicates which
    // accepts a variable number of arguments, and checks whether there
    // are any duplicates among the arguments passed in.

    // You cand solve this using the frencency counter pattern 
    // OR the multiple pointers pattern

    // Exercice by Colt Steele


    // How I will proceed ?
    // I will use the multiples pointer pattern 
    // First i will check the first value with the second
    // If there aren't the same, I will move the index of the second to the next then I check again
    // If there are the same, I will move the index of my first number to the next  as well as the second


    const areThereDuplicates = (...args) => {
        args.sort((a,b) => a > b)
        let start = 0;
        let next = 1;

        while (next < args.length) {
            if (args[start] === args[next]) {
                return true;
            }

            start++;
            next++;
        }

        return false;
    }

    console.log(areThereDuplicates(1, 2, 3)); // false
    console.log(areThereDuplicates(1,2,2)) // true
    console.log(areThereDuplicates('a','b','c','d','a')) // false

})()