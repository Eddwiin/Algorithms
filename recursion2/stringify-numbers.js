(function () {

    // Exercice by Colt Steel
    // Write a function called stringifyNumbers which takes in an object
    // and finds all of the values which are numbers and convertes them to string.
    // Recursion would be a freat way to solve this.

    // What do I have to do ?
    // Create a stringifyNumbers (obj) function which converts all the numbers to string

    const stringifyNumbers = (obj) => {
        let newObj = {}
        for (let key in obj) {
            if (Number.isInteger(obj[key])) {
                newObj[key] = obj[key].toString();
            } else if (obj[key] instanceof Object && !Array.isArray(obj[key])) {
                newObj[key] = stringifyNumbers(obj[key]);
            } else {
                newObj[key] = obj[key]
            }
        }

        return newObj;
    }


    let obj = {
        num: 1,
        test: [],
        data: {
            val: 4,
            info: {
                isRight: true,
                random: 66
            }
        }
    }


    console.log(stringifyNumbers(obj));
    //  Expected
    //   {
    //     num: "1",
    //         test: [],
    //             data: {
    //         val: "4",
    //             info: {
    //             isRight: true,
    //                 random: "66"
    //         }
    //     }
    // }

})()