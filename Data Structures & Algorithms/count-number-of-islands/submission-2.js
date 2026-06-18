class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islands = 0;
        let seen = new Set();

        function bfs(row, col){
            let queue = new Queue();
            queue.enqueue([row, col]);

            while(!queue.isEmpty()){
                const [row, col] = queue.dequeue();

                let dirs = [[1,0], [0,1], [-1,0], [0,-1]];

                for(const [dr, dc] of dirs){
                    const[ddr, ddc] = [dr + row, dc + col];

                    if(!seen.has(JSON.stringify([ddr, ddc])) && ddr >= 0 && ddc >= 0 && ddr < grid.length && ddc < grid[0].length && grid[ddr][ddc] === "1"){
                        queue.enqueue([ddr, ddc]);
                        seen.add(JSON.stringify([ddr, ddc]))
                    }
                }
            }
        }

        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){
                if(grid[r][c] === "1" && !seen.has(JSON.stringify([r,c]))){
                    bfs(r, c);
                    islands++;
                }
            }
        }
        return islands;
    }
}
