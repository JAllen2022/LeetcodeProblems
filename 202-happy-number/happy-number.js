/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    let num = n;
    let myObj= new Map()
    myObj.set(n,true)

    while(num!==1){
        let temp = num.toString();
        num=0
        for(let i=0;i<temp.length;i++){
            let ele = temp[i]
            num+= Number(ele)*Number(ele)
        }
        if(num===1) return true
        if(myObj.get(num)) return false
        myObj.set(num,true)
    }

    return true
    
};