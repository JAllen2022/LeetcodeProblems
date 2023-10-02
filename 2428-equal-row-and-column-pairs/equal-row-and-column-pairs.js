/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {

    const grids= {}
    let count=0

    for(let i=0;i<grid[0].length;i++) {
        let temp = ""
        for(let j=0;j<grid.length-1;j++) {
            temp+=grid[j][i]+","
        }
        temp+=grid[grid.length-1][i]
        if (grids[temp]){
            grids[temp]++
        } else {
            grids[temp]=1
        }
    }

    for(let i=0;i<grid.length;i++) {
        const temp = grid[i].join(",")
        if(grids[temp]){
            count+=grids[temp]
        }
    }

    return count
    
};