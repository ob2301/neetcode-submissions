class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let seen = new Set();
        let islands = 0;

        function bfs(r, c){
            seen.add(JSON.stringify([r,c]));

                let dirs = [[1,0], [0,1], [-1,0], [0,-1]];
                for(const [dr, dc] of dirs){
                    const [dx, dy] = [r + dr, c + dc];

                    if(dx >= 0 && dy >= 0 && dy < grid[0].length && dx < grid.length && !seen.has(JSON.stringify([dx,dy])) && grid[dx][dy] === "1"){
                        bfs(dx, dy);
                    }
                }
            
        }

        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){
                if(grid[r][c] == "1" && !seen.has(JSON.stringify([r,c]))){
                    bfs(r, c);
                    islands++;
                }
            }
        }

        return islands;
    }
}
