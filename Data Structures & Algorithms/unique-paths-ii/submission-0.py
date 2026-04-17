class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        
        cache = {}

        def dfs(r, c):
            if r >= len(obstacleGrid) or c >= len(obstacleGrid[0]) or obstacleGrid[r][c] == 1:
                return 0

            if r == len(obstacleGrid) - 1 and c == len(obstacleGrid[0]) - 1:
                return 1
            
            if (r,c) in cache: 
                return cache[(r,c)]
            
            cache[(r,c)] = dfs(r + 1, c) + dfs(r, c + 1)
            return cache[(r,c)]
        
        return dfs(0,0)