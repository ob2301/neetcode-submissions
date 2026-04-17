class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        //dfs, everytime we hit a non land, we add 1
        let seen = new Set();

        function dfs(row, col){
            if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === 0) return 1;
            if(seen.has(JSON.stringify([row, col]))) return 0;

            seen.add(JSON.stringify([row, col]));
            return dfs(row + 1, col) + dfs(row - 1, col) + dfs(row, col - 1) + dfs(row, col + 1);
        }

        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){
                if(grid[r][c] === 1) return dfs(r, c);
            }
        }
        return 0;
    }
}
