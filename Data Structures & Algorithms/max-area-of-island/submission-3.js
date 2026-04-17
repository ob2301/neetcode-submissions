class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        if(grid.length === 0) return 0;
        let max = 0, seen = new Set(), cur = 0;

        function bfs(island){
            cur = 1;
            let q = new Queue();
            q.enqueue(island);
            seen.add(JSON.stringify(island));

            while(!q.isEmpty()){
                max = Math.max(cur, max);
                const [r,c] = q.dequeue();
                const dirs = [[1,0], [0,1], [-1,0], [0,-1]];

                for(const [dr,dc] of dirs){
                    const nc = c + dc;
                    const nr = r + dr;

                    if(nc >= 0 && nr >= 0 && nc < grid[0].length && nr < grid.length && !seen.has(JSON.stringify([nr,nc])) && grid[nr][nc] === 1){
                        seen.add(JSON.stringify([nr,nc]));
                        q.enqueue([nr,nc]);
                        cur++;
                        //max = Math.max(cur, max);
                    }
                }
                
            }
        }
        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){
                if(grid[r][c] === 1) bfs([r,c]);
            }
        }
        return max;
    }
}
