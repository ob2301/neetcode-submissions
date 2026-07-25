class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        islands = 0

        seen = set()

        def bfs(row, col):
            if (row, col) in seen:
                return

            q = deque()
            q.append([row, col])

            while q:
                r, c = q.popleft()
                seen.add((r, c))

                dirs = [[1,0], [0,1], [-1,0], [0,-1]]
                for x, y in dirs:
                    dr, dc = x + r, c + y

                    if dr >= 0 and dc >= 0 and dr < len(grid) and dc < len(grid[0]) and not (dr, dc) in seen:
                        if grid[dr][dc] == "1":
                            q.append([dr, dc])

        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if not (r, c) in seen and grid[r][c] == "1":
                    bfs(r, c)
                    islands += 1
        
        return islands
                