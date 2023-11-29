// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maximumUniqueSubarray = function(nums) {
//    let max = 0;
//     let runningSum = 0;
//     let myObj = {};
//     let left = 0;

//     for (let right = 0; right < nums.length; right++) {
//         if (myObj[nums[right]] !== undefined && myObj[nums[right]] >= left) {
//             while (left <= myObj[nums[right]]) {
//                 runningSum -= nums[left];
//                 left++;
//             }
//         }

//         runningSum += nums[right];
//         myObj[nums[right]] = right;
//         max = Math.max(max, runningSum);
//     }

//     return max;
    
// };

var maximumUniqueSubarray = function(nums) {
    let left = 0
    let max = 0
    let sum = 0
    let set = new Set()

    for (let right = 0; right < nums.length; right++) {
        while (set.has(nums[right])) {
            sum -= nums[left]
            set.delete(nums[left])
            left++
        }

        set.add(nums[right])
        sum += nums[right]

        max = Math.max(max, sum);
    }

    return max;
};