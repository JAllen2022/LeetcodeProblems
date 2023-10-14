/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    const retArr = [[1]]

    for(let i=0;i<numRows-1;i++) {
        const prevRow = retArr[i]
        const nextLevel = new Array(prevRow.length+1).fill(1)
        for(let i=0;i<prevRow.length-1;i++) {
            nextLevel[i+1] = prevRow[i]+prevRow[i+1]
        }
        retArr.push(nextLevel)
    }

    return retArr
    
};