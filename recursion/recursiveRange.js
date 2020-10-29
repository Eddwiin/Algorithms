(function () {

    // Exercice by Colt Steel

    // Write a function called recursiveRange which accepts a number and
    // adds up all the numbers from 0 to the number passed to the function


    // What do I have to do?
    // I have to create a recursiveRange (n) function where I will cumulate
    // each digit up to n starting from 0

    // How will I do?
    // I will create a iteration's variable
    // I will use a fonction (add) to cumul each iteration (it's my recursive function)
    // In the add's function return sum when iteration === n
    // In otherwise, increment iteration and return add with the sum + my iteration

    const recursiveRange = (n) => {
        if (n === 0) return 0;
        return n + recursiveRange(n-1);
    }

    console.log(recursiveRange(6)) // 21
    console.log(recursiveRange(10)) // 55
})()