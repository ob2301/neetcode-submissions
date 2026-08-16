# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        #depth
        levels = {}

        def dfs(depth, node):
            if not node:
                return
            
            if depth in levels:
                levels[depth].append(node.val)
            else:
                levels[depth] = [node.val]
            
            if node.left:
                dfs(depth + 1, node.left)
            if node.right:
                dfs(depth + 1, node.right)
        
        dfs(0, root)
        return list(levels.values())
            