class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let max = 0, local = 0;

        //bfs on each island
        let seen = new Set();

        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){
                if(grid[r][c] === 1 && !seen.has(JSON.stringify([r, c]))){
                    local = 1;
                    dfs(r, c);
                    max=Math.max(local, max);
                }
            }
        }

        function dfs(r, c){
            if(seen.has(JSON.stringify([r, c]))){
                return;
            }

            seen.add(JSON.stringify([r, c]));

            let dirs = [[1,0], [0,1], [-1,0], [0,-1]];
            for(const [dr, dc] of dirs){
                let [x, y] = [r + dr, c + dc];
                if(x >= 0 && y >= 0 && x < grid.length && y < grid[0].length && !seen.has(JSON.stringify([x, y])) && grid[x][y] === 1){
                    local++;
                    dfs(x, y);
                }
            }
        }

        return max;
    }
}
