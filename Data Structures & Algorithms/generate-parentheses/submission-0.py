class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []

        def dfs(subset, left, right):
            if left == 0 and right == 0:
                res.append(subset)
                return
            if left < 0 or right < 0:
                return
            
            dfs(subset + "(", left - 1, right)
            if left < right:
                dfs(subset + ")", left, right - 1)
            

        dfs("", n, n)
        return res
