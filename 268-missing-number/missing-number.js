/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    const range = nums.length

    for(let i = 1 ; i<=nums.length;i++) {
        if (nums.indexOf(i)=== -1) return i
    }

    return 0
    
};