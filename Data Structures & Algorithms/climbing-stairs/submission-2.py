class Solution:
    def climbStairs(self, n: int) -> int:
        cache = [-1 for _ in range(n)]
        
        def dfs(count):
            if count >= n:
                return count == n
            if cache[count] != -1:
                return cache[count]
            
            cache[count] = dfs(count + 1) + dfs(count + 2)
            return cache[count]
        
        return dfs(0)
            