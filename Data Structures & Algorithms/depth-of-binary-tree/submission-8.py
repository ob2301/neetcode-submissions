# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        #depth is distance from root
        maxDepth = 0

        def dfs(node, dist):
            if not node:
                return
            nonlocal maxDepth
            maxDepth = max(dist, maxDepth)

            if node.left:
                dfs(node.left, dist + 1)
            if node.right:
                dfs(node.right, dist + 1)
        

        dfs(root, 1)
        return maxDepth
