class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const INF = 2147483647;

        let queue = new Queue();

        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){
                if(grid[r][c] === 0){
                    queue.enqueue([r, c]);
                }
            }
        }

        while(!queue.isEmpty()){
            let len = queue.size();

            while(len > 0){
                const [r, c] = queue.dequeue();
                len--;

                if(grid[r][c] == -1){
                    continue;
                }

                const dirs = [[1,0], [0,1], [-1,0], [0,-1]];
                for(const [x, y] of dirs){
                    const [dr, dc] = [x + r, y + c];

                    if(dr >= 0 && dc >= 0 && dr < grid.length && dc < grid[0].length && grid[dr][dc] === INF){
                        grid[dr][dc] = grid[r][c] + 1;
                        queue.enqueue([dr, dc]);
                    }
                }
                len--;
            }
        }
    }
}
