/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if(strs.length<1) return ""
    
    let index=0;

    while(index<strs[0].length) {
        let letter = strs[0][index]
        for(let i=0;i<strs.length;i++) {
            let curr = strs[i]
            if(curr[index]!==letter){
                return strs[0].slice(0,index)
            }
        }
        index++
    }
    return strs[0].slice(0,index)
    
};