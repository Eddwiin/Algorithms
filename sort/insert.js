(function () {

    // Write a function taking a arr, index and value then add in the arr according to index
    
    // What I have to do ?
    // Create a function insert(arr,index,val)
    // Verify into the function that's index is between 0 and arr.length - 1
    // Create a for from arr.length - 1 to index
    // Do arr arr[i +1] = arr[i]
    // If n === i then arr[n + 1] = val
    // Return arr;


    const insert = (arr, index, val) => {
        if (index < 0 && index > arr.length) return false;

        for (let i = arr.length - 1; i > index; i--) {
            arr[i+1] = arr[i];
        }

        arr[index + 1] = val;
        return arr;
    }

    console.log(insert([1,5,6,8,7,4,1], 3, 17))
})()