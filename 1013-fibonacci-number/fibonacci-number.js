/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, memo={}) {
    if(n===0) return 0
    if(n===1) return 1

    let fibArray= new Array(n+1).fill(0)
    fibArray[1]=1
    for(let i=2; i<fibArray.length;i++) {
        fibArray[i] = fibArray[i-1] + fibArray[i-2]
    }
    
    return fibArray[n]
};