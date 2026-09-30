# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        #dfs function, hold a max within the arg
        count = 0

        def dfs(curMax, node):
            nonlocal count

            if not node:
                return

            curM = curMax
            
            if node.val >= curMax:
                curM = node.val
                count += 1
            
            if node.left:
                dfs(curM, node.left)
            
            if node.right:
                dfs(curM, node.right)
        
        dfs(-101, root)
        return count

        