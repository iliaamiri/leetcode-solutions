/**
 * @param {string[]} strs
 * @return {string}
 */

// flower
// fly
// fly
// flames

function longestCommonPrefix(strs) {
  let result = "";
  let index = 0;
  while (true) {
    const firstItem = strs[0];
    for (let j = 1; j < strs.length; j++) {
      const itemComp = strs[j];
      if (
        firstItem[index] !== itemComp[index] ||
        firstItem[index] === undefined ||
        itemComp[index] === undefined
      ) {
        return result;
      }
    }
    if (firstItem[index].length === 0) {
        return result
    }
    result += firstItem[index];
    index += 1;
  }
}

console.log(longestCommonPrefix(['']))
