# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        
        lst = []

        def dfs(node):

            if not node:
                return
            
            left = dfs(node.left)
            lst.append(node.val)
            right = dfs(node.right)

            return 
        
        dfs(root)
        
        return lst[k - 1]