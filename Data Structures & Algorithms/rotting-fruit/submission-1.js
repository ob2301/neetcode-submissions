class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let q = new Queue();
        let fresh = 0, minutes = 0;

        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){
                if(grid[r][c] === 2){
                    q.enqueue([r,c]);
                }
                if(grid[r][c] === 1){
                    fresh++;
                }
            }
        }
        //while our q is not empty AND we have frsh fruits left
        //pop from queue (rotten oranges)
        while(!q.isEmpty() && fresh > 0){
            let len = q.size();
            for(let i = 0; i < len; i++){
                let [r,c] = q.dequeue();
                let dirs = [[1,0], [0,1], [-1,0], [0,-1]];

                for(const [dr,dc] of dirs){
                    const nr = r + dr;
                    const nc = c + dc;

                    if(nc >= 0 && nr >= 0 && nc < grid[0].length && nr < grid.length && grid[nr][nc] === 1){
                        q.enqueue([nr,nc]);
                        grid[nr][nc] = 2;
                        fresh--;
                    }
                }
            }
            minutes++;
        }
        return fresh > 0 ? -1 : minutes;
    }
}
