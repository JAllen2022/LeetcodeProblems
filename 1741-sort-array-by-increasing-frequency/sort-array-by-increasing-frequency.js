/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {

    let obj = {}
    for(let i=0;i<nums.length;i++) {
        obj[nums[i]]= obj[nums[i]] ? obj[nums[i]]+1 : 1 
    }

    return nums.sort((a,b)=> {
        if(obj[a]<obj[b]){
            return -1
        } else if (obj[a]>obj[b]){
            return 1
        } else {
            if(a>b) return -1
            else return 1
        }
    })
    
};