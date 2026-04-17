class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let seen = new Set();
        
        for(let r = 0; r < board.length; r++){
            for(let c = 0; c < board[0].length; c++){
                if(c === 0 || c === board[0].length - 1 || r === 0 || r === board.length - 1){
                    if(board[r][c] === "O"){
                        board[r][c] = "#";
                    }
                }
            }
        }

        function bfs(row, col){
            let q = new Queue();
            q.enqueue([row,col]);
            seen.add(JSON.stringify([row,col]));

            while(!q.isEmpty()){
                const dirs = [[1,0], [0,1], [-1,0], [0,-1]];
                const [r,c] = q.dequeue();

                for(const [dr,dc] of dirs){
                    const nr = r + dr;
                    const nc = c + dc;

                    if(nc >= 0 && nr >= 0 && nc < board[0].length && nr < board.length && !seen.has(JSON.stringify([nr,nc])) && board[nr][nc] === "O"){
                        board[nr][nc] = "#";
                        q.enqueue([nr,nc]);
                        seen.add(JSON.stringify([nr,nc]));
                    }
                }
            }
        }

        for(let r = 0; r < board.length; r++){
            for(let c = 0; c < board[0].length; c++){
                if(board[r][c] === "#"){
                    bfs(r,c);
                }
            }
        }

        for(let r = 0; r < board.length; r++){
            for(let c = 0; c < board[0].length; c++){
                if(board[r][c] === "O"){
                    board[r][c] = "X";
                }
                if(board[r][c] === "#"){
                    board[r][c] = "O";
                }
            }
        }
    }
}
