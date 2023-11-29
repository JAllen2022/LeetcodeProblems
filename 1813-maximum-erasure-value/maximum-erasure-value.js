/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
   let max = 0;
    let runningSum = 0;
    let myObj = {};
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (myObj[nums[right]] !== undefined && myObj[nums[right]] >= left) {
            while (left <= myObj[nums[right]]) {
                runningSum -= nums[left];
                left++;
            }
        }

        runningSum += nums[right];
        myObj[nums[right]] = right;
        max = Math.max(max, runningSum);
    }

    return max;
    
};