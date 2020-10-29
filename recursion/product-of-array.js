(function() {

    // Exercice by Colt Steel 

    // Write a function called productOfArray which takes in an array 
    // of numbers and returns the product of them all

    // What I have to do ?
    // Create a recursive function to cumul the product of my integer array
    
    // How I'm goind to get it done ?
    // I have to create productOfArray(arr)
    

    const productOfArray = (arr) => {
        if (arr.length === 0) return 1;
        return arr[arr.length - 1] * productOfArray(arr.filter((val, index) => index !== arr.length - 1 ))
    }

    console.log(productOfArray([1,2,3])) // 6
    console.log(productOfArray([1,2,3,10])) // 60
})()