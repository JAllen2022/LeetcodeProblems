/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    const arr = s.split(" ")

    function reverse(word){
        let ret=''
        for(let i= word.length-1; i>=0;i--){
            ret+=word[i]
        }
        return ret
    }

    for(let i=0;i<arr.length;i++) {
        arr[i] = reverse(arr[i])
    }
    return arr.join(" ")
};
