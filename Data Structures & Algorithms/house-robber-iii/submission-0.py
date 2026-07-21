# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rob(self, root: Optional[TreeNode]) -> int:
        dp = {}

        def dfs(node, using_self):
            if (node, using_self) in dp:
                return dp[(node, using_self)]
            if not node:
                return 0
            
            if using_self:
                ret = node.val
                ret += dfs(node.left, not using_self)
                ret += dfs(node.right, not using_self)
                dp[(node, using_self)] = ret
                return ret
            else:
                ret = 0
                ret += max(dfs(node.left, not using_self), dfs(node.left, using_self))
                ret += max(dfs(node.right, not using_self), dfs(node.right, using_self))
                dp[(node, using_self)] = ret
                return ret

        return max(dfs(root, True), dfs(root, False))


