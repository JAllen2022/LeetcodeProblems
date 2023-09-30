/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {

    const myObj = {}
    
    for(let i=0;i<arr.length;i++) {
        let num = arr[i]
        if(myObj[num/2] || myObj[num*2]) return true
        myObj[num]=true;
    }

    return false
    
};