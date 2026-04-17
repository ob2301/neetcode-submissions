class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let q = new Queue();

        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[r].length; c++){
                if(grid[r][c] === 0){
                    q.enqueue([r,c]);
                }
            }
        }

        while(!q.isEmpty()){
            let len = q.size();

            for(let i = 0; i < len; i++){
                const [r,c] = q.dequeue();

                const dirs = [[1,0], [0,1], [-1,0], [0,-1]];

                for(const [dr,dc] of dirs){
                const nr = dr + r;
                const nc = dc + c;

                if(nc >= 0 && nr >= 0 && nr < grid.length && nc < grid[0].length && grid[nr][nc] === 2147483647){
                    grid[nr][nc] = grid[r][c] + 1;
                    q.enqueue([nr,nc]);
                }
                }
            }
        }
    }
}
