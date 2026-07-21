# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rob(self, root: Optional[TreeNode]) -> int:
        dp = {}

        def dfs(node):
            if node in dp:
                return dp[node]
            if not node:
                return 0, 0

            # using this, not

            ret_l, ret_r = 0, 0

            l_l, l_r = dfs(node.left)
            r_l, r_r = dfs(node.right)
            
            ret_l = node.val + l_r + r_r
            ret_r = max(l_l, l_r) + max(r_l, r_r)

            dp[node] = ret_l, ret_r
            return dp[node]

        return max(dfs(root))


