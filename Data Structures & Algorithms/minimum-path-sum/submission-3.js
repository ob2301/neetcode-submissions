class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid) {

        let dp = Array.from( {length: grid.length}, () => Array(grid[0].length).fill(-1));

        function dfs(x, y){
            if(x === grid.length - 1 && y === grid[0].length - 1){
                return grid[x][y];
            }
            if(x >= grid.length || y >= grid[0].length){
                return Infinity;
            }
            if(dp[x][y] !== -1) return dp[x][y];

            dp[x][y] = grid[x][y] + Math.min(dfs(x + 1, y), dfs(x, y + 1));

            return dp[x][y];
        }
        return dfs(0, 0);
    }
}
