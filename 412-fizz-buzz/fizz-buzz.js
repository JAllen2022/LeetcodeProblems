/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {

    const ret = []

    for(let i=1;i<=n;i++) {
        let a = ""
        if(i%3===0 && i%5===0) a="FizzBuzz"
        else if (i%3===0) a="Fizz"
        else if (i%5===0) a="Buzz"
        else a=`${i}`

        ret.push(a)
    }

    return ret
    
};