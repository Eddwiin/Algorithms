(function () {

    // Exercice by Colt Steel

    // Write a function called power which accepts a base and an exponent. The function should
    // return the power of the base to the exponent. This function
    // should mimic the functionality of Math.pow() - do not worry about
    // negative bases and exponents


    // What do I have to do?
    // Create a power function (base, exponant) which will return the power of the base by the exponant

    // How am I going to get it done?
    // If my exponent is equal to or less than 1, I return base
    // Otherwise I recall my power function with base = base * base and exponent = exponent - 1

    const power = (base, exponent) => {
        if (exponent < 1) return 1;
        return base * power(base, exponent - 1)
    }

    console.log(power(2, 0)); // 1
    console.log(power(2, 2)); // 4
    console.log(power(2, 4)); // 16
})()