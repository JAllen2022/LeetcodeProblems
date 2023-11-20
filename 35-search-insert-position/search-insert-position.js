/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {


    let index=0;
    let mid = Math.floor(nums.length/2)
    let left = 0;
    let right = nums.length-1
    
    // check if target is less than or greater than last nodes
    if(target<nums[0]) return 0
    if(target>nums[nums.length-1]) return nums.length

    while(left<right) {
        if(nums[mid]===target) return mid;
        else {
            const l = mid-1
            const r = mid+1
            if(nums[l]<target && target<nums[mid] && nums[l]!==target){
                return mid
            } else if (nums[mid]<target && target<nums[r] && nums[r]!==target){
                return r
            }

            if (nums[mid]>target){
                right=mid-1
            } else {
                left=mid+1;
            }
        }
        mid = Math.floor((left+right)/2)
        
    }

    return mid
};