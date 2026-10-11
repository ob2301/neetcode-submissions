# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        #measuring depth, so we take the value with us recursively

        nodes = {}

        def dfs(node, depth):
            if not node:
                return
            
            if depth in nodes:
                nodes[depth].append(node.val)
            else:
                nodes[depth] = [node.val]
            
            if node.left:
                dfs(node.left, depth + 1)
            if node.right:
                dfs(node.right, depth + 1)
            
            return
        dfs(root, 0)
        return list(nodes.values())
            