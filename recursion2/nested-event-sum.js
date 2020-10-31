(function () {

    // Exercice by Colt Steel
    // Write a recursive funciton called nestedEventSum. Return the sum
    // of all even numbers is an object which may contain nested objects.

    // What do I have to do?
    // I need to create a nestedEventSum (obj) function where obj can have any
    // which attributes
    // I have to cumulate the sum of all the numbers of each attribute


    // How will I do?
    // I will browse the keys of my object
    // Each attribute, I check if its value is an int and it is even
    // If yes, I accumulate the sum
    // If it's an object, I call my function
    // If it's another type, I ignore it

    const nestedEvenSum = (obj) => {
        let sum = 0;

        for (let key in obj) {
            if (Number.isInteger(obj[key]) && obj[key] % 2 === 0) {
                sum += obj[key]
            }

            if (obj[key] instanceof Object) {
                sum += nestedEvenSum(obj[key])
            }
        }

        return sum;
    }

    var obj1 = {
        outer: 2,
        obj: {
            inner: 2,
            otherObj: {
                superInner: 2,
                notANumber: true,
                alsoNotANumber: "yup"
            }
        }
    }

    var obj2 = {
        a: 2,
        b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
        c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
        d: 1,
        e: { e: { e: 2 }, ee: 'car' }
    };

    console.log(nestedEvenSum(obj1)); // 6
    console.log(nestedEvenSum(obj2)); // 10

})()