/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let left=0;
    let prev= -Infinity

    for(let i=0; i<nums.length; i++) {
        const cur = nums[i]
        if(prev===-Infinity){ 
            prev = cur
            left++
        }
        else {
            if(prev===cur){
                continue
            } else {
                prev=cur
                nums[left]=cur
                left++
            }
        }
        
    }

    return left
};