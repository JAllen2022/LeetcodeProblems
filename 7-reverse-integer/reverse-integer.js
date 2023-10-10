/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let negative = false
    if(x<0) negative=true

    let reversedNum = negative ? -parseInt(x.toString().split("").reverse().join("")) : parseInt(x.toString().split("").reverse().join(""))

    if (reversedNum > Math.pow(2, 31) - 1 || reversedNum < -Math.pow(2, 31)) {
        return 0;
    }
    return reversedNum
    
};
