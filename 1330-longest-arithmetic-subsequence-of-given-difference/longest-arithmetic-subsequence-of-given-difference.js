var longestSubsequence = function(arr, difference) {
    // This object will store the maximum sequence length for each ending number
    let maxLengths = {};
    let maxCount = 0;  // This keeps track of the maximum sequence length found so far

    for (let num of arr) {
        // Calculate the number that would come before the current number in the sequence
        let prevNum = num - difference;

        if (maxLengths.hasOwnProperty(prevNum)) {
            // If a sequence exists ending in prevNum, extend it by 1
            maxLengths[num] = maxLengths[prevNum] + 1;
        } else {
            // Otherwise, start a new sequence of length 1
            maxLengths[num] = 1;
        }

        // Update maxCount if the current sequence is the longest found so far
        maxCount = Math.max(maxCount, maxLengths[num]);
    }

    return maxCount;  // This is the length of the longest sequence
};


// /**
//  * @param {number[]} arr
//  * @param {number} difference
//  * @return {number}
//  */
// var longestSubsequence = function(arr, difference) {
    
//     let count = 1;
//     let subFound = false
//     const myObj = {}
//     let prev = undefined

//     for(let i=0;i<arr.length;i++) {
//         console.log("checking math", prev, prev+difference, "=", arr[i], difference)
//         if(prev && prev+difference ==arr[i] ){
//             console.log("we in here")
//             count++
//             prev=arr[i] 
//         }

//         if(!subFound){
//             if(myObj[arr[i]-difference]){
//                 console.log("we chose", arr[i]-difference, )
//                 subFound=true
//                 prev=arr[i]
//                 count++
//                 subFound=true
//             }
//             myObj[arr[i]]= true
//         }

//     }


//     return count

// };