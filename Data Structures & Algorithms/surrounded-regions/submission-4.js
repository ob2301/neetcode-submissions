class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let queue = new Queue();

        for(let r = 0; r < board.length; r++){
            for(let c = 0; c < board[0].length; c++){
                if(board[r][c] === "O" && (r === 0 || c === 0 || c === board[0].length - 1 || r === board.length - 1)){
                    queue.enqueue([r, c]);
                    board[r][c] = "#";
                }
            }
        }

        while(!queue.isEmpty()){
            let len = queue.size();

            while(len > 0){
                const [r, c] = queue.dequeue();

                const dirs = [[1,0], [0,1], [-1,0], [0,-1]];
                for(const [dr, dc] of dirs){
                    const [x, y] = [dr + r, dc + c];

                    if(x >= 0 && y >= 0 && x < board.length && y < board[0].length && board[x][y] == "O"){
                        board[x][y] = "#";
                        queue.enqueue([x, y]);
                    }
                }
                len--;
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
