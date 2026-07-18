class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {

        matrix.reverse();

        for(let r = 0; r < matrix.length; r++){
            for(let c = r; c < matrix[0].length; c++){
                let temp = matrix[r][c];
                matrix[r][c] = matrix[c][r];
                matrix[c][r] = temp;
            }
        }
    }
}
