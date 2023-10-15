/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    let left = 0
    let zeroCount = 0
    for(let i=0; i<nums.length;i++){
        if(nums[i]===0){
            zeroCount++
        } else {
            nums[left]=nums[i]
            left++
        }
    }

    for(let i=0;i<zeroCount;i++) {
        nums[nums.length-1-i]=0
    }
    return nums
};