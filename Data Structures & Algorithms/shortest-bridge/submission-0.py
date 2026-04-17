class Solution:
    def shortestBridge(self, grid: List[List[int]]) -> int:
        N = len(grid)
        dirs = [[1,0], [0,1], [-1,0], [0,-1]]

        def invalid(x, y):
            return x < 0 or x >= N or y < 0 or y >= N
        
        seen = set()
        q = deque()

        def dfs(x, y):
            if invalid(x,y) or grid[x][y] != 1 or (x,y) in seen:
                return
            seen.add((x,y))


            for dx, dy in dirs:
                dfs(x + dx, y + dy)
            
        def bfs():
            res = 0
            q = deque(seen)

            while q:
                for i in range(len(q)):
                    r, c = q.popleft()
                    for dr, dc in dirs:
                        curR, curC = dr + r, dc + c

                        if invalid(curR, curC) or (curR, curC) in seen:
                            continue
                        
                        if grid[curR][curC] == 1:
                            return res
                        
                        q.append([curR, curC])
                        seen.add((curR, curC))
                res += 1
            
            return res



        for i in range(N):
            for r in range(N):
                if grid[i][r] == 1:
                    dfs(i,r)
                    return bfs()
            

        