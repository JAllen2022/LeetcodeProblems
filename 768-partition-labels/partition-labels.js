/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {

    let partitions = []
    let myObj = {}
    let left=0;
    let right = 0

    for(let i=0;i<s.length;i++) {
        let cur = s[i]
        let nextIndex = s.indexOf(cur,i+1)
        // console.log("next", i, cur, nextIndex)
        if(nextIndex>right) {
            right=nextIndex
        } 
        if(i===right) {
            partitions.push(right-left+1)
            right++
            left=right
        }
    }

    return partitions
    
};