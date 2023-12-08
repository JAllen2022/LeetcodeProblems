/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

    if(`${num}`.length<2) return num

    let retNum = 0;
    for(let i=0;i<`${num}`.length;i++) {
        retNum+= Number(`${num}`[i])
    }

    return addDigits(retNum)

};