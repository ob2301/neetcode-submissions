class Solution:
    def solve(self, board: List[List[str]]) -> None:
        #find all 0s connected to edges, dfs from them
        #add all these 0s to a seen set, then
        # change the remaining 0s to X

        seen = set()
        queue = deque()

        for r in range(len(board)):
            for c in range(len(board[0])):
                if (r == 0 or c == 0 or r == len(board) - 1 or c == len(board[0]) - 1) and board[r][c] == "O":
                    queue.append((r, c))
                    #seen.add((r, c))

        #bfs on queue

        while queue:
            r, c = queue.pop()

            if (r, c) in seen:
                continue
            
            seen.add((r, c))

            dirs = [[1,0], [0,1], [-1,0], [0,-1]]
            for x, y in dirs:
                dr, dc = x + r, y + c

                if dr >= 0 and dc >= 0 and dr < len(board) and dc < len(board[0]) and board[dr][dc] == "O":
                    queue.append((dr, dc))

        for r in range(len(board)):
            for c in range(len(board[0])):
                if (r, c) not in seen and board[r][c] == "O":
                    board[r][c] = "X"
        