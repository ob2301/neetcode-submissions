class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        found = False

        def dfs(i, r, c):
            nonlocal found

            if found:
                return

            if r >= len(board) or c >= len(board[0]) or c < 0 or r < 0:
                return

            if board[r][c] == 0:
                return

            temp = board[r][c]
            if board[r][c] == word[i]:
                if i == len(word) - 1:
                    found = True
                    return
                board[r][c] = 0
                dfs(i + 1, r + 1, c)
                dfs(i + 1, r - 1, c)
                dfs(i + 1, r, c - 1)
                dfs(i + 1, r, c + 1)
                board[r][c] = temp

            
        for r in range(len(board)):
            for c in range(len(board[0])):
                if board[r][c] == word[0]:
                    dfs(0, r, c)
                    if found == True:
                        break
            if found == True:
                break

        return found