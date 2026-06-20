class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let queue = new Queue(); //treasure chests

        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){
                if(grid[r][c] === 0){
                    queue.enqueue([r, c, 0]);
                }
            }
        }

        const inf = 2147483647;
        let seen = new Set();

        while(!queue.isEmpty()){
            const [r, c, dist] = queue.dequeue();

            if(seen.has(JSON.stringify([r, c]))) continue;
            seen.add(JSON.stringify([r, c]));

            const dirs = [[1,0], [0,1], [-1,0], [0,-1]];

            for(const [dr, dc] of dirs){
                const [x, y] = [dr + r, dc + c];

                if(x >=0 && y >= 0 && x < grid.length && y < grid[0].length && grid[x][y] === inf){
                    grid[x][y] = dist + 1;
                    queue.enqueue([x, y, dist + 1]);
                }
            }
        }
    }
}
