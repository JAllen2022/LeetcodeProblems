/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carryOver=1;
    for(let i=digits.length-1;i>=0;i--) {
        let num = digits[i]+ carryOver
        carryOver=0
        if(num>=10){
            carryOver=1;
            digits[i]=0;
        } else {
            digits[i]=num;
            break
        }
    }

    if(carryOver>0){
        digits.unshift(carryOver)
    }

    return digits
};