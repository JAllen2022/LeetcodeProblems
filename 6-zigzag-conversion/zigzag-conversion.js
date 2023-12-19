/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if(numRows<=1) return s

    const tempArr = new Array(numRows)
    for(let i=0;i<tempArr.length;i++) {
        tempArr[i]= new Array()
    }

    let decrease= false;
    let numRow=0

    for(let i=0;i<s.length;i++) {
        if(!decrease) {
            tempArr[numRow].push(s[i])
            numRow++;
            if(numRow>=numRows){
                decrease=true;
                numRow=numRows-2>=0 ? numRows-2 : 0
            }
        } else {
            tempArr[numRow].push(s[i])
            numRow--;
            if(numRow<0){
                decrease=false;
                numRow= 1<=tempArr.length ? 1 : 0
            }
        }
    }

    let retString=''
    tempArr.forEach(ele=> retString +=ele.join(""))

    return retString
};