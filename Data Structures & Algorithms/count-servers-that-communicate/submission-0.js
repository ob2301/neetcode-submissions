class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    countServers(grid) {
        let res = 0;

        let cols = Array(grid[0].length).fill(0);
        let rows = Array(grid.length).fill(0);

        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){
                if(grid[r][c] === 1){
                    cols[c]++;
                    rows[r]++;
                }
            }
        }

        for(let r = 0; r < rows.length; r++){
            for(let c = 0; c < cols.length; c++){
                if(grid[r][c] === 1 && (cols[c] > 1 || rows[r] > 1)){
                    res++;
                }
            }
        }

        return res;
    }
}
