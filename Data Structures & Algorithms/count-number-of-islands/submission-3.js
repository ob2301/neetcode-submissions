class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let seen = new Set();
        let islands = 0;
        
        function bfs(r, c){
            let queue = new Queue();
            queue.enqueue([r,c]);
            seen.add(JSON.stringify([r,c]));

            while(!queue.isEmpty()){
                const [row, col] = queue.dequeue();

                let dirs = [[1,0], [0,1], [-1,0], [0,-1]];

                for(const [dr, dc] of dirs){
                    const [ro, co] = [dr + row, dc + col];

                    if(ro >= 0 && co >= 0 && ro < grid.length && co < grid[0].length && grid[ro][co] === "1" && !seen.has(JSON.stringify([ro, co]))){
                        seen.add(JSON.stringify([r,c]));
                        bfs(ro, co);
                    }
                }
            }
        }

        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){
                if(!seen.has(JSON.stringify([r,c])) && grid[r][c] === "1"){
                    bfs(r, c);
                    islands++;
                }
            }
        }

        return islands;
    }
}
