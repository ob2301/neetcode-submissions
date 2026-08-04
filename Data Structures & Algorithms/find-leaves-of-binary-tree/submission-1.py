# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def findLeaves(self, root: Optional[TreeNode]) -> List[List[int]]:
        #height == 0 is a leaf

        cache = {}
        #height -> node(s)

        def dfs(node):
            if not node:
                return 0

            height = 1 + max(dfs(node.left), dfs(node.right))

            if height in cache:
                cache[height].append(node.val)
            else:
                cache[height] = [node.val]
            
            return height
        
        dfs(root)

        res = []

        for nodes in cache.values():
            res.append(nodes)
        return res