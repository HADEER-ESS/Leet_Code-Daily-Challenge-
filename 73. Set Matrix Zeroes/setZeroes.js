/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let row = matrix.length
    let col = matrix[0].length

    let zeros = []

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {

            if (matrix[i][j] === 0) zeros.push([i, j])
        }
    }

    for (let pos of zeros) {
        let [r, c] = pos
        for (let i = 0; i < row; i++) {
            matrix[i][c] = 0
        }
        for (let j = 0; j < col; j++) {
            matrix[r][j] = 0
        }
    }
};
