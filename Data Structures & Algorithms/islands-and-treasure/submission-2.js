class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const inf = 2147483647;

        let q = new Queue();

        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){
                if(grid[r][c] === 0){
                    q.enqueue([r,c]);
                }
            }
        }

        while(!q.isEmpty()){
            const len = q.size();

            for(let i = 0; i < len; i++){
                const [r,c] = q.dequeue();

                const dirs = [[1,0], [0,1], [-1,0], [0,-1]];
                for(const [dr, dc] of dirs){
                    const [nr, nc] = [dr + r, dc + c];

                    if(nr >= 0 && nc >= 0 && nr < grid.length && nc < grid[0].length && grid[nr][nc] === inf){
                        q.enqueue([nr,nc]);
                        grid[nr][nc] = grid[r][c] + 1;
                    }
                }
            }
        }
    }
}
