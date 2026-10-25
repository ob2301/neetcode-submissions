from collections import deque
class Solution:
    def getFood(self, grid: List[List[str]]) -> int:
        queue = deque()
        found = False
        
        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == "*":
                    queue.append((r, c, 0))
                    found = True
                    break
            if found:
                break
        
        seen = set()
        while queue:
            r, c, steps = queue.popleft()
            if (r, c) in seen:
                continue
            seen.add((r, c))
            if grid[r][c] == "#":
                return steps

            dirs = [[1,0], [0,1], [-1,0], [0,-1]]
            for dr, dc in dirs:
                dx, dy = dr + r, dc + c
                if dx >= 0 and dy >= 0 and dx < len(grid) and dy < len(grid[0]) and (dx, dy) not in seen:
                    if grid[dx][dy] == "#":
                        return steps + 1
                    if grid[dx][dy] == "O":
                        queue.append((dx, dy, steps + 1))
        return -1
