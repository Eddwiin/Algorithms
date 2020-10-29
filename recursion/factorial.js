(function () {

    // Exercice by Colt Steel

    // Write a function which accepts a number and returns the factorial
    // of that number. A factorial is the product of an integer and all the
    // integers below it; e.g; factorial four (4!) is equal to 24, because 
    // 4*3*2*1 equals 24, factorial zero (0!) is always 1

    // What do I have to do?
    // I have to create a factorial (n) function which must
    // return me the factorial of n

    // How will I do ?
    // If n == 1; return 1
    // Otherwise return n * factorial (n -1)

    const factorial = (n) => {
        if (n < 0) return 0;
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }

    console.log(factorial(1)) // 1
    console.log(factorial(2)) // 2
    console.log(factorial(4)) // 24
    console.log(factorial(7)) // 5040
})()