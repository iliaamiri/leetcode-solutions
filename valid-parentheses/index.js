const parenthesesDic = {
  '(': ')',
  '{': '}',
  '[': ']',
}

const openParentheses = Object.keys(parenthesesDic)

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid (s) { // s = '([])()' ✅
  let index = 0

  if (!openParentheses.includes(s[index]))
    return false

  let currChars = s[index]

  index++

  while(index < s.length || currChars.length > 0) {
    if (!openParentheses.includes(s[index])) {
      if (parenthesesDic[currChars[currChars.length - 1]] !== s[index]) {
        return false
      }
      currChars = currChars.slice(0, -1)
    } else {
      currChars += s[index]
    }

    index++
  }

  return true
}

// s = ')' ❌
// s = '()' ✅
// s = '(]' ❌

const testCases = {
  ')': false,
  '()': true,
  '(]': false,
  '(())': true,
  '([])': true,
  '([]': false,
  '([]((': false,
  '([])(': false,
  '([])()': true,
}

Object.keys(testCases).forEach(testCase => {
  console.log('test case', testCase, ' result: ', isValid(testCase), ' expected: ', testCases[testCase])
})


