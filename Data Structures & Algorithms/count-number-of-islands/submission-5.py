class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        islands = 0

        seen = set()

        def bfs(r, c):
            queue = deque()
            queue.append((r, c))

            while queue:
                (r, c) = queue.popleft()
                if (r, c) in seen:
                    continue
                seen.add((r, c))
                dirs = [[1,0], [0,1], [-1,0], [0,-1]]

                for dr, dc in dirs:
                    row, col = dr + r, dc + c

                    if row >= 0 and col >= 0 and row < len(grid) and col < len(grid[0]) and not (row, col) in seen and grid[row][col] == "1":
                        queue.append((row, col))

        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if not (r, c) in seen and grid[r][c] == "1":
                    bfs(r, c)
                    islands += 1

        return islands
                