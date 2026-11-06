from collections import deque

class Solution:
    def numDistinctIslands(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])
        visited = set()#nodes
        shapes = set()#shapes

        q = deque([])
        
        def addq(r,c, lr, lc):
            if r < 0 or r == ROWS or c < 0 or c == COLS or grid[r][c] == 0 or (r,c) in visited:
                return
            else:
                visited.add((r,c))
                q.append(((r,c),(lr,lc)))

        self.count = 0

        def bfs(q):
            current_shape = []
            while q:
                node = q.popleft()
                (r, c), (local_r, local_c) = node
                current_shape.append((local_r,local_c))
                addq(r-1,c, local_r-1, local_c)
                addq(r+1,c, local_r+1, local_c)
                addq(r,c-1, local_r, local_c-1)
                addq(r,c+1, local_r, local_c+1)

            if tuple(current_shape) not in shapes:
                self.count += 1
                shapes.add(tuple(current_shape))

        for r in range(ROWS):
            for c in range(COLS):
                if (r,c) in visited or grid[r][c] == 0:
                    continue
                else:
                    q.append(((r,c),(0,0)))
                    bfs(q)
    
        return self.count


