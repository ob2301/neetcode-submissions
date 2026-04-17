class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let arr_maps = [];
            for(let i = 0; i < 9; i++){
                arr_maps.push(new Set());
            }
        for(let r = 0; r < board.length; r++){
            let row_check = new Set();
            let col_check = new Set();
            
            for(let c = 0; c < board[r].length; c++){
                if(board[c][r] !== '.'){
                    if(col_check.has(JSON.stringify(board[c][r]))) return false;
                    else{
                        col_check.add(JSON.stringify(board[c][r]));
                    }
                }
                if(board[r][c] !== '.'){
                    if(row_check.has(JSON.stringify(board[r][c]))) return false;
                    else{
                    row_check.add(JSON.stringify(board[r][c]));
                    }
                    let box_i = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                    if(arr_maps[box_i].has(board[r][c])) return false;
                    else{
                    arr_maps[box_i].add(board[r][c]);
                }
                }

                

            }
        }
        return true;
    }
}
