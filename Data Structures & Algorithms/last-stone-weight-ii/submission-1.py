class Solution:
    def lastStoneWeightII(self, stones: List[int]) -> int:
        dp = {}

        def dfs(i, diff):
            if i == len(stones):
                return diff
            
            if (i, diff) in dp:
                return dp[(i, diff)]

            if diff - stones[i] >= 0:
                dp[(i, diff)] = min(dfs(i + 1, diff - stones[i]), dfs(i + 1, diff))
            
            elif diff - stones[i] < 0:
                dp[(i, diff)] = dfs(i + 1, diff)
            
            return dp[(i, diff)]
        
        total = sum(stones)
        best = total // 2 - dfs(0, total // 2)
        return (total - best) - best
            