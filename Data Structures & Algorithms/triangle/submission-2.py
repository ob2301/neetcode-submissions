class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        dp = [[0] * len(triangle[len(triangle) - 1]) for _ in range(len(triangle) + 1)]
        ret = float("inf")

        for r in range(1, len(triangle) + 1):
            for i in range(len(triangle[r - 1])):
                if i == 0:
                    dp[r][i] = triangle[r-1][i] + dp[r-1][i]
                elif i < len(triangle[r - 1]) - 1:
                    dp[r][i] = min(triangle[r-1][i] + dp[r-1][i], triangle[r-1][i] + dp[r-1][i-1])
                else:
                    dp[r][i] = triangle[r-1][i] + dp[r-1][i-1]

            if r == len(triangle):
                for num in dp[len(dp) - 1]:
                    ret = min(num, ret)



        return ret



