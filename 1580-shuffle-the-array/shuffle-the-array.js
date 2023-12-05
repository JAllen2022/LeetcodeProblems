/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

var shuffle = function(nums, n) {
    
    let half = (nums.length/2)
    let retArr=[]

    for(let i=0;i<nums.length/2;i++) {
        retArr.push(nums[i])
        retArr.push(nums[half])
        half++
    }

    return retArr

};