/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

    let left = 0;
    let right = x

    while(left<=right) {
        const mid = Math.floor((right+left)/2)
        const sqrt= mid*mid
        if( (sqrt<=x) && (mid+1)*(mid+1)>x) return mid
        else if (sqrt>x) right = mid-1
        else left = mid+1
    }
    
};

// if(x===0) return 0
//     for(let i=1;i<=x;i++) {
//         let check = i*i
//         let rem = x-check
//         if(check>x) return i-1
//         if(rem===0 || rem/i <= 1 ) return i
//     }