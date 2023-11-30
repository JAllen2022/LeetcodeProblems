/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {

    const w1={}, w2={};

    for(let i=0;i<word1.length;i++){
        const ele=word1[i]
        w1[ele] = w1[ele] ? w1[ele]+1:1
    }
    for(let i=0;i<word2.length;i++){
        const ele=word2[i]
        w2[ele] = w2[ele] ? w2[ele]+1:1
    }


    for(let i in w1) {
        let diff = 0
        if(w2[i]){
            let diff = Math.abs(w1[i]-w2[i])
        } else diff =w1[i]
        if(diff>3) return false
    }

    for(let i in w2){
        let diff=0
        if(w1[i]){
            diff = Math.abs(w1[i]-w2[i])
            
        } else diff =w2[i]
        if(diff>3) return false
    }
   

    return true
    
};