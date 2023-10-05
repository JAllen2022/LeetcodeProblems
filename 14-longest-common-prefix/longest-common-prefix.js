/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(arr) {


    let i = 1;
    let prf = arr[0];
    while(i < arr.length){
        if(!arr[i].startsWith(prf)){
            prf = prf.slice(0, -1)
        }else{
            i++
        }
    }
    return prf
    // if(strs.length<1) return ""
    
    // let index=0;

    // while(index<strs[0].length) {
    //     let letter = strs[0][index]
    //     for(let i=0;i<strs.length;i++) {
    //         let curr = strs[i]
    //         if(curr[index]!==letter){
    //             return strs[0].slice(0,index)
    //         }
    //     }
    //     index++
    // }
    // return strs[0].slice(0,index)
    
};