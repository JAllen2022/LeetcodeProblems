/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let left = 0
    let prev;
    let count = 0;

    for(let i=0;i<nums.length;i++) {
        const cur = nums[i]
        if(prev===undefined) {
            prev=cur
            count++
            left++
        } else {
            if(prev===cur) {
                count++
                if(count<3) {
                    nums[left]=cur
                    left++
                } 
            } else {
                prev=cur
                nums[left]=cur;
                count=1
                left++
            }
        }
    }

    return left
    
};