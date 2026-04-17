class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let q = new Queue();
        //append all of the chests
        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){
                if(grid[r][c] === 0){
                    q.enqueue([r,c]);
                }
            }
        }

        while(!q.isEmpty()){
            let len = q.size()
            for(let i = 0; i < len; i++){
                let directions = [[1,0], [0,1], [-1,0], [0,-1]];
                const [r,c] = q.dequeue();
                for(const [dr,dc] of directions){
                    const nc = c + dc;
                    const nr = r + dr;

                    if(nc >= 0 && nr >= 0 && nc < grid[0].length && nr < grid.length && grid[nr][nc] === 2147483647){
                        grid[nr][nc] = grid[r][c] + 1;
                        q.enqueue([nr,nc]);
                    }
                }
            }
      }
    }
}
