/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let cnt = 0

    for (let r = 0; r < row; r++) {

        for (let c = 0; c < col; c++) {
            if (matrix[r][c] === 0) continue;
            if (r > 0 && c > 0) {
                matrix[r][c] = Math.min(
                    matrix[r - 1][c],
                    matrix[r][c - 1],
                    matrix[r - 1][c - 1]
                ) + 1
            }
            cnt += matrix[r][c]
        }
    }

    return cnt;
};