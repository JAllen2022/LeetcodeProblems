/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {

    let left=0,right=s.length-1;

    while(left<right){
        if(s[left]!==s[right]){
            return isPalindrome(left+1,right,s) || isPalindrome(left,right-1,s)
        }
        left++,right--;
    }
    return true
    
};

function isPalindrome(left,right,s) {

    while(left<right){
        if(s[left]!==s[right]) return false
        right--,left++;
    }
    return true
}


    // let right = s.length-1;
    // let left = 0
    // let subOne = false
    // let queue = []
    // while (left<=right) {
    //     let currL = s[left]
    //     let currR = s[right];
    //     console.log(currL, currR, left, right)
    //     // if indexes are the same
    //     if(left===right){
    //         return true
    //     }
    //     if(currL===currR) {
    //         right --
    //         left ++ 
    //     } else if(currL !==currR){
    //         if(subOne){
    //             if(queue.length) {
    //                 [left,right,subOne] = queue.pop()
    //             } else return false
    //         }
    //         //check left, check right
    //         if(left+1===right || right-1===left) {
    //             console.log("we in here")
    //             return true
    //             }
    //         if (s[left+1]===s[right]) {
                
    //             if(queue.length || subOne) {
    //                 queue.push([left+2,right-1,true])
    //             } else {
    //                 left+=2
    //                 right--
    //                 subOne=true
    //             }
    //         }
    //         if (s[left]===s[right-1]){
    //              if(queue.length) {
    //                 queue.push([left+2,right-1,true])
    //             } else {
    //                 left++;
    //                 right-=2
    //                 subOne=true
    //             }
                
    //         } else {
    //             return false
    //         }
    //     }
    // }

    // return true