/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    const output = [-1,-1]

    let left = 0, right = nums.length-1

    // first we find the right bound
    while(left<=right) {
        let half = Math.floor( (left+right)/2)
        console.log("checking half", half)
        if(nums[half]===target) {
            if(nums[half+1]!==target) {
                output[1]=half;
                break;
            } else {
                left = half+1
                continue;
            }
        }

        if(nums[half]<target) {
            left = half+1
        } else {
            right = half-1
        }
    }

    left = 0, right = nums.length-1

    // then we repeat and find the left bound
    while(left<=right) {
        let half = Math.floor( (left+right)/2)
        if(nums[half]===target) {
            if(nums[half-1]!==target) {
                output[0]=half;
                break;
            } else {
                right = half-1
                continue;
            }
        }

        if(nums[half]<target) {
            left = half+1
        } else {
            right = half-1
        }
    }


    return output
    
};