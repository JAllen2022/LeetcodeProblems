/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x===0) return 0
    for(let i=1;i<=x;i++) {
        let check = i*i
        let rem = x-check
        if(check>x) return i-1
        if(rem===0 || rem/i <= 1 ) return i
    }
};