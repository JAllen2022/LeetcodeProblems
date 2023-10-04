/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let left=0;
    let prev;

    for(let i=0; i<nums.length; i++) {
        const cur = nums[i]
        if(prev===undefined){ 
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