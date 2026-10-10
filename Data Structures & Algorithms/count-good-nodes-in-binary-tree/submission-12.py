# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        #keep track of a max on dfs
        res = 0

        def dfs(curMax, node):
            nonlocal res
            newMax = curMax

            if node.val >= curMax:
                res += 1
                newMax = node.val
            
            if node.left:
                dfs(newMax, node.left)
            if node.right:
                dfs(newMax, node.right)
        
        dfs(-100, root)
        return res
        

        