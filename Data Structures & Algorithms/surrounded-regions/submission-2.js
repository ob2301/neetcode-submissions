class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let q = new Queue(), seen = new Set();

        //first find border Os, bfs from them
        for(let r = 0; r < board.length; r++){
            for(let c = 0; c < board[r].length; c++){
                if(!seen.has(JSON.stringify([r,c])) && (r === 0 || r === board.length - 1 || c === 0 || c === board[r].length - 1) && board[r][c] === "O"){
                    seen.add(JSON.stringify([r,c]));
                    q.enqueue([r,c]);
                    board[r][c] = "#";
                }
            }
        }

        //find all valid Os, and mark them with a #
        while(!q.isEmpty()){
            const len = q.size();
            for(let i = 0; i < len; i++){
                const [r,c] = q.dequeue();
                const dirs = [[1,0], [0,1], [-1,0], [0,-1]];

                for(const [dr,dc] of dirs){
                    const nr = r + dr;
                    const nc = c + dc;

                    if(nc >= 0 && nr >= 0 && nc < board[0].length && nr < board.length){
                        if(!seen.has(JSON.stringify([nr,nc])) && board[nr][nc] === "O"){
                            q.enqueue([nr,nc]);
                            board[nr][nc] = "#";
                            seen.add(JSON.stringify([nr,nc]));
                        }
                    }
                }
            }
        }

        for(let r = 0; r < board.length; r++){
            for(let c = 0; c < board[0].length; c++){
                if(board[r][c] === "O"){
                    board[r][c] = "X";
                }
                else if(board[r][c] === "#"){
                    board[r][c] = "O";
                }
            }
        }
    }
}
