/**
 * @param {string} s
 * @return {number}
 */

const RomanToIntDic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

const romanToIntRec = function(s) {
    if (s.length === 1)
        return RomanToIntDic[s]

    const firstNum = RomanToIntDic[s[0]]
    const secondNum = RomanToIntDic[s[1]]

    return (secondNum > firstNum ? -firstNum : +firstNum) + romanToIntRec(s.slice(1))
};

function romanToInt(s) {
    let answer = 0

    if (s.length === 1) return RomanToIntDic[s]

    for (let i = 1; i < s.length + 1; i++) {
        const prevNum = RomanToIntDic[s[i - 1]]
        const currNum = s[i] === undefined ? undefined : RomanToIntDic[s[i]]

        answer += currNum === undefined 
            ? prevNum
            : (prevNum < currNum) ? -prevNum : prevNum
    }

    return answer
}
