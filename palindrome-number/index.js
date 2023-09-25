/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) { // 121
    let xStr = x.toString()

    let palindromizedX = ''
    for (let i = xStr.length; i > 0; i--) {
        palindromizedX += xStr[i - 1]
    }

    return xStr === palindromizedX
};

console.log(isPalindrome(-1))