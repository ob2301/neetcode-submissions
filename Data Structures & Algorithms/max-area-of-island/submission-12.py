class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        res = 0

        seen = set()

        def bfs(row, col):
            nonlocal res
            queue = deque()
            curMax = 0

            queue.append((row, col))

            while queue:
                (r, c) = queue.pop()

                if (r, c) in seen:
                    continue
                
                curMax += 1
                seen.add((r, c))

                dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
                for x, y in dirs:
                    dr, dc = x + r, y + c

                    if dr >= 0 and dc >= 0 and dr < len(grid) and dc < len(grid[0]) and grid[dr][dc] == 1:
                        queue.append((dr, dc))
                
            res = max(curMax, res)

        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if (r, c) not in seen and grid[r][c] == 1:
                    bfs(r, c)

        return res