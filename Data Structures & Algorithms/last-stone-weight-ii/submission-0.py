class Solution:
    def lastStoneWeightII(self, stones: List[int]) -> int:

        if len(stones) == 1:
            return stones[0]

        if len(stones) == 0:
            return 0

        cache = {}

        def dfs(i, diff):
            #where weight is the weight of the 
            if i == len(stones):
                return diff

            if (i, diff) in cache:
                return cache[(i, diff)]

            if diff - stones[i] < 0:
                cache[(i, diff)] = dfs(i + 1, diff)

            else:
                cache[(i, diff)] = min(dfs(i + 1, diff), dfs(i + 1, diff - stones[i]))
            return cache[(i, diff)]

        total = sum(stones)
        remaining = (total // 2) - dfs(0, total // 2)
        best = total - remaining
        return abs((total - best) - best)

            