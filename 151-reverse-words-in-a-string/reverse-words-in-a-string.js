/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let temp = s.split(" ").reverse();
    let ls=[]
    for(let i=0;i<temp.length;i++) {
        if(!temp[i] || temp[i]===' ')continue
        else ls.push(temp[i])
    }
    
    return ls.join(" ")
    
};