/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(!nums.length)return nums
    let prev;
    const retArr = []
    for(let i=0; i <nums.length ; i++) {
        if(prev===undefined) prev=nums[i]
        else {
            if(nums[i-1]+1!==nums[i]){
                if(prev===nums[i-1])retArr.push(`${prev}`)
                else retArr.push(`${prev}->${nums[i-1]}`)
                prev=nums[i]
            }
        }
    }

    if(prev===nums[nums.length-1]) retArr.push(`${prev}`)
    else retArr.push(`${prev}->${nums[nums.length-1]}`)

    return retArr
    
};