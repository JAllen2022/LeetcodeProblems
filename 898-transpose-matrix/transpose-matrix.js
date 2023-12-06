/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {

    const retMatrix = []

    for(let i=0;i<matrix[0].length; i++){
        retMatrix.push(new Array(matrix.length).fill(0))
    }

    console.log(retMatrix)


    for(let i = 0 ;i<matrix[0].length;i++) {
        for(let j = 0 ; j<matrix.length;j++) {
            const num = matrix[j][i]
            // console.log(i,j,retMatrix[i][j])
            retMatrix[i][j]=num
        }
    }

    return retMatrix
};