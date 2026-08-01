class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        rotted_queue = deque()

        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == 2:
                    rotted_queue.append((r, c))


        minutes = 0
        while rotted_queue:
            length = len(rotted_queue)
            while length:
                (r, c) = rotted_queue.popleft()
                length -= 1

                dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]

                for dr, dc in dirs:
                    nDr, nDc = r + dr, c + dc

                    if nDr >= 0 and nDc >= 0 and nDr < len(grid) and nDc < len(grid[0]) and grid[nDr][nDc] == 1:
                        rotted_queue.append((nDr, nDc))
                        grid[nDr][nDc] = 2 #rotten now
            if rotted_queue:
                minutes += 1
        
        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == 1:
                    return -1
        return minutes


