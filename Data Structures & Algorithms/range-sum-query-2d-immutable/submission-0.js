class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const ROWS = matrix.length, COLS = matrix[0].length;

        this.mat = Array.from({ length: ROWS + 1}, () => 
        Array(COLS + 1).fill(0));

        for(let r = 0; r < ROWS; r++){
            let prefix = 0;
            for(let c = 0; c < COLS; c++){
                prefix += matrix[r][c];

                this.mat[r + 1][c + 1] = prefix + this.mat[r][c + 1];
            }
        }


    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        return this.mat[row2 + 1][col2 + 1] + this.mat[row1][col1] - this.mat[row2 + 1][col1] - this.mat[row1][col2 + 1];
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
