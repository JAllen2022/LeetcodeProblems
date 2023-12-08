/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

    let retNum = num

    while(`${retNum}`.length>1){
        let temp=0;

        for(let i=0;i<`${retNum}`.length;i++) temp+= Number(`${retNum}`[i])

        retNum=temp
    }

    return retNum

};