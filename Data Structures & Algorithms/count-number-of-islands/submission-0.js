class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let number = 0, seen = new Set();

        function bfs(row, col){
            seen.add(JSON.stringify([row, col]));
            const dirs = [[1,0], [0,1], [-1,0], [0,-1]];

            for(const [x,y] of dirs){
                const [dr, dy] = [row + x, col + y];

                if(dr >= 0 && dr < grid.length && dy >= 0 && dy < grid[0].length && !seen.has(JSON.stringify([dr, dy])) && grid[dr][dy] === "1"){
                    bfs(dr, dy);
                }
            }
        }

        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[r].length; c++){
                if(!seen.has(JSON.stringify([r, c])) && grid[r][c] === "1"){
                    bfs(r, c);
                    number++;
                }
            }
        }

        return number;
    }
}
