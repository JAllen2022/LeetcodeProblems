/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {

    let count = 0;

    citations.sort((a,b)=>b-a)

    for(let i=0;i<citations.length;i++) {
        if(citations[i]>i) continue;
        else return i
    }

    if(citations[citations.length-1]>=citations.length) return citations.length
    else return 0
    
};