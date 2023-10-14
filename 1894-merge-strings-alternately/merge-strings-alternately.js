/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {

    const shorter = word1.length > word2.length ? word2 : word1
    const longer = shorter===word1 ? word2 : word1
    let retString = ""
    for (let i=0; i<shorter.length;i++) {
        retString +=word1[i] + word2[i]
    }

    if(word1.length!==word2.length) retString += longer.slice(shorter.length)

    return retString
    
};