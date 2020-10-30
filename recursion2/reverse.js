(function () {

    // Exercice Colt Steel
    // Write a recursive a function called reverse which accepts
    // a string returns a new string in reverse

    // What do I have to do?
    // Create a reverse function with a string as a parameter
    // and which returns the inverse of this string

    // How will I do?
    // Condition: Use recursion
    // Use str.split (''). Slice (1) to return the last letter of my thong
    // at the end
    // Stop recursion when my string is empty

    const reverse = (str) => {
        if (str.length === 0) return '';
        return str[str.length - 1] + reverse(str.slice(0, str.length - 1))
    }

    console.log(reverse('awesome'))// 'emosewa'
    console.log(reverse('rithmschool')) // 'loohcsmhtir'

})()