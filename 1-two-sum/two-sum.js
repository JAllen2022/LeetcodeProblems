/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
var twoSum = function(nums, target) {

    const obj={} 
    for(let i=0;i<nums.length;i++) {
        const diff = target-nums[i]
        console.log("checking ", obj[diff])
        if(obj[diff] || obj[diff]===0) return [obj[diff],i]
        else obj[nums[i]]=i
    }

    console.log(obj)

//    //create a Set
//     let mySet=new Set();
//    // Iterate through nums
//     for(let i=0;i<nums.length;i++){
//         // If statement - if nums -target=== a number that the set has, then we have our condition
//         if(mySet.has(target-nums[i])){
//             // take the current index, and find the index of the index in the past.
//             const x = nums.indexOf(target-nums[i]);
//             // return the value in an array [,i]
//             return [x,i];
//         } else{
//             // if it doesn't have the number, add to the set
//             mySet.add(nums[i])
//         }

//     }
};