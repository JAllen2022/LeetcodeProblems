/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    let myObj = {
        "M":1000,
        "CM":900,
        "D":500,
        "CD":400,
        "C":100,
        "XC":90,
        "L":50,
        "XL":40,
        "X":10,
        "IX":9,
        "V":5,
        "IV":4,
        "I":1,
    }

    let num = 0;
    let index=0;
    for(let keys in myObj) {
        let op1 = s[index]
        let op2 = s[index]+ s[index+1]
        while(op1===keys || op2===keys){
            if(keys===op2){
                num+= myObj[op2]
                index+=2
            } else if (keys===op1){
                num+= myObj[op1]
                index++
            }
            op1 = s[index]
            op2 = s[index]+ s[index+1]
        }
        
        
    }

    return num

    
};