class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let max = 0;
        let seen = new Set();

        function bfs(x, y){
            let cur = 0;
            let q = new Queue();
            q.enqueue([x,y]);
        while(!q.isEmpty()){
            const [x, y] = q.dequeue();
            if(seen.has(JSON.stringify([x,y]))){
                continue;
            }
            cur++;
            seen.add(JSON.stringify([x,y]));

            const directions = [[1,0], [0,1], [-1,0], [0,-1]];

            for(const [dx, dy] of directions){
                const [tx, ty] = [dx + x, dy + y];

                if(tx >= 0 && tx < grid.length && ty >= 0 && ty < grid[0].length && !seen.has(JSON.stringify([tx,ty])) && grid[tx][ty] === 1){
                    q.enqueue([tx,ty]);
                }
            }
        }
        max = Math.max(max, cur);
        }

        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){
                if(grid[r][c] === 1 && !seen.has(JSON.stringify([r,c]))){
                    bfs(r,c);
                }
            }
        }
        return max;
    }
}
