(function () {

    // Exercice Colt Steel
    // Write a recursive function called isPalindrome which returns true if
    // the string passed to it is a palindrome (reads the same forward and backward).
    // Otherwise it returns false.


    // / What do I have to do ?
    // Create an isPalindrome function which takes a string as a parameter
    // and which tells me if it's a palindrome

    // How will I do ?
    // Condition: Use a recursion
    // Check if the first and the last character are the same
    // If yes, remove the two letters then use the recursion
    // Stop the recursion when there is only one letter left


    const isPalindrome = (word) => {
        if (word.length === 1) return true;

        return (word[0] === word[word.length - 1])
            ? isPalindrome((word.slice(1, word.length - 1)))
            : false
    }

    // console.log(isPalindrome('awesome')) // false
    // console.log(isPalindrome('foobar')) //  false
    // console.log(isPalindrome('tacocat')) // true
    // console.log(isPalindrome('amanaplanacanalpanama')) // true
    // console.log(isPalindrome('amanaplanacanalpandemonium')) // false


    // Solution 2 with multiple pointers pattern

    // How will I do ?
    // I will browse left (variable left) and right (variable right)
    // and compare their value
    // If the two values do not match, I return false
    // If they match, I increment by 1 left and I reduce by 1 right
    // I'll use a while loop which will stop when left === right


    isPalindrome2 = (word) => {
        let left = 0;
        let right = word.length - 1;

        while (left !== right) {
            if (word[left] !== word[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }

    console.log(isPalindrome2('awesome')) // false
    console.log(isPalindrome('foobar')) //  false
    console.log(isPalindrome('tacocat')) // true
    console.log(isPalindrome('amanaplanacanalpanama')) // true
    console.log(isPalindrome('amanaplanacanalpandemonium')) // false
})()