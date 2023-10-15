var moveZeroes = function(nums) {
    let left = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap non-zero element with the leftmost zero
            [nums[left], nums[i]] = [nums[i], nums[left]];
            left++;
        }
    }
    
    return nums;
};
