class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid) {

        let dp = Array.from( {length: grid.length}, () => Array(grid[0].length).fill(-1));
        
        function dfs(r, c){
            if(r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];

            if(r >= grid.length || c >= grid[0].length) return Infinity;

            if(dp[r][c] !== -1) return dp[r][c];

            dp[r][c] = grid[r][c] + Math.min(dfs(r + 1, c), dfs(r, c + 1));
            return dp[r][c];
            
        }

        return dfs(0, 0);
    }
}
