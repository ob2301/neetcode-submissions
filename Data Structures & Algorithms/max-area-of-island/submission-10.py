class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        cmax = 0
        seen = set()
        cur = 0

        def invalid(r,c):
            return r >= len(grid) or c >= len(grid[r]) or r < 0 or c < 0


        def bfs(r, c):
            nonlocal cur 
            cur += 1
            seen.add((r,c))
            
            dirs = [[1,0], [0,1], [-1,0], [0,-1]]

            for dr, dc in dirs:
                dx, dy = dr + r, dc + c

                if (dx,dy) in seen or invalid(dx,dy):
                    continue
            
                elif grid[dx][dy] == 1:
                    bfs(dx,dy)

        for r in range(len(grid)):
            for c in range(len(grid[r])):
                if not (r,c) in seen and grid[r][c] == 1:
                    bfs(r,c)
                    cmax = max(cmax, cur)
                    cur = 0
        return cmax