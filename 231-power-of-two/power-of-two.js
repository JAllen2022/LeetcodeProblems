/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let num=1
    for(let i=0;num<=n;i++){
        if(num===n) return true;
        num*=2
    }
    return false
};