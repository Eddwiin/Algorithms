(function () {

    // Exercice Colt Steel
    // Write a function called collectStrings which accepts an object
    // and returns an array of all the values in the object that have a typeof
    // string

    const collectStrings = (obj) => {
        let arr = []

        for (key in obj) {
            if (obj[key] instanceof Object) {
                arr = [...arr, ...collectStrings(obj[key])]
            } else if (Array.isArray(obj[key])) {
                arr = [...arr, ...obj[key]]
            } else {
                arr = [...arr, obj[key]]
            }
        }

        return arr;
    }

    const obj = {
        stuff: "foo",
        data: {
            val: {
                thing: {
                    info: "bar",
                    moreInfo: {
                        evenMoreInfo: {
                            weMadeIt: "baz"
                        }
                    }
                }
            }
        }
    }

    console.log(collectStrings(obj)) // ["foo", "bar", "baz"])
})()