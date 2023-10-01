/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    const hashS = {}
    const hashT = {}

    let s1=''
    let s1Count=1
    let t1=''
    let t1Count=1


    for(let i=0;i<s.length;i++) {
        if(hashS[s[i]]){
            s1+=hashS[s[i]]
        } else {
            s1+=s1Count
            hashS[s[i]]=s1Count
            s1Count++
        }
        if(hashT[t[i]]){
            t1+=hashT[t[i]]
        } else {
            t1+=t1Count
            hashT[t[i]]=t1Count
            t1Count++
        }
    }

    console.log(s1,"t1:", t1)

    return s1===t1
    
};