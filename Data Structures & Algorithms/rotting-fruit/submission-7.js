class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let queue = new Queue(), time = 0, need = 0;

        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){
                if(grid[r][c] === 2) queue.enqueue([r,c]);
                if(grid[r][c] === 2 || grid[r][c] === 1) need++;
            }
        }
        let cur = queue.size();

        while(!queue.isEmpty()){
            let len = queue.size();
            if(cur === need) return time;

            while(len > 0){
                const [r, c] = queue.dequeue();
                len--;

                const dirs = [[1,0], [0,1], [-1,0], [0,-1]];

                for(const [dr, dc] of dirs){
                    const [x, y] = [dr + r, dc + c];

                    if(x >= 0 && y >= 0 && x < grid.length && y < grid[0].length && grid[x][y] === 1){
                        grid[x][y] = 2;
                        queue.enqueue([x, y]);
                        cur++;
                    }
                }
            }
            time++;
        }

        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){
                if(grid[r][c] === 1) return -1;
            }
        }

        return time;
    }
}
