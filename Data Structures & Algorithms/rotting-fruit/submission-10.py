class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        totalFruits = 0

        queue = deque()

        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == 2:
                    queue.append((r, c))
                
                if grid[r][c] != 0:
                    totalFruits += 1

        totalFruits -= len(queue)
        minutes = 0

        while queue:
            minutes += 1
            curLen = len(queue)

            while curLen:
                (r, c) = queue.popleft()
                curLen -= 1
                
                dirs = [[1,0], [0,1], [-1,0], [0,-1]]
                for x, y in dirs:
                    row, col = r + x, c + y

                    if row >= 0 and col >= 0 and row < len(grid) and col < len(grid[0]) and grid[row][col] == 1:
                        grid[row][col] = 2
                        queue.append((row, col))
                        totalFruits -= 1

        if totalFruits == 0:
            return max(minutes - 1, 0)
            
        return -1


        

        


