class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        #bfs, not multi source
        seen = set()
        maxArea = 0
        #to not repeat land cells

        def bfs(r, c):
            nonlocal maxArea
            localArea = 1
            queue = deque()
            queue.append((r, c))
            seen.add((r, c))

            while queue:
                (r, c) = queue.popleft()
                dirs = [[1,0], [0,1], [-1,0], [0,-1]]

                for x, y in dirs:
                    dr, dc = x + r, y + c

                    if dr >= 0 and dc >= 0 and dc < len(grid[0]) and dr < len(grid) and grid[dr][dc] == 1 and not (dr, dc) in seen:
                        seen.add((dr, dc))
                        queue.append((dr, dc))
                        localArea += 1
            
            maxArea = max(maxArea, localArea)

        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == 1 and not (r, c) in seen:
                    bfs(r, c)
        return maxArea
        
                    

        

        

        

