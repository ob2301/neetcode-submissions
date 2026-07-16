class Solution:
    def minCost(self, costs: List[List[int]]) -> int:
        dp = {}

        def dfs(r, prev):
            if (r, prev) in dp:
                return dp[(r, prev)]
            if r >= len(costs):
                return 0

            ret = float("inf")
            for c in range(len(costs[0])):
                if prev != c:
                    ret = min(ret, costs[r][c] + dfs(r + 1, c))

            dp[(r, prev)] = ret
            return dp[(r, prev)]

        return dfs(0, -1)


