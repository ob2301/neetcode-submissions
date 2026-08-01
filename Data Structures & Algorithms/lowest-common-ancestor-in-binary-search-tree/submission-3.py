# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        def dfs(node):
            if not node:
                return
            if p.val == node.val:
                return p
            if q.val == node.val:
                return q

            if q.val > node.val and p.val > node.val:
                return dfs(node.right)
            if q.val < node.val and p.val < node.val:
                return dfs(node.left)
            
            return node
        
        return dfs(root)



