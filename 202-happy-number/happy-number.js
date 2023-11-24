/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    let num = n;
    let myObj={[n]:true}

    while(num!==1){
        let temp = num.toString();
        num=0
        for(let i=0;i<temp.length;i++){
            let ele = temp[i]
            num+= Number(ele)*Number(ele)
        }
        if(num===1) return true
        if(myObj[num]) return false
        myObj[num]= true
    }

    return true
    
};