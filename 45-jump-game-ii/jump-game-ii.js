var jump = function(nums) {
    let n = nums.length;
    if (n < 2) return 0;  // if the length is less than 2, we are already at the last index
    
    let jumps = 0;
    let currentEnd = 0;  // the farthest index that can be reached with "jumps" jumps
    let furthestReach = 0;  // the farthest index that can be reached with "jumps + 1" jumps
    
    for (let i = 0; i < n - 1; i++) {  // we don't need to iterate the last element
        furthestReach = Math.max(furthestReach, i + nums[i]);
        
        if (i == currentEnd) {
            jumps++;
            currentEnd = furthestReach;
            
            if (furthestReach >= n - 1) break;  // if we can reach the end, break early
        }
    }
    
    return jumps;
};
