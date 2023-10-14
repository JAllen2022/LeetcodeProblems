/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const myObj = {}
    for(let i=0;i<arr.length;i++) {
        if(myObj[arr[i]]) myObj[arr[i]]++
        else myObj[arr[i]]=1
    }

    const check = Object.values(myObj)
    const checked = {}

    for(let i=0;i<check.length;i++) {
        if(checked[check[i]]) return false
        else checked[check[i]] = true
    }

    return true
};