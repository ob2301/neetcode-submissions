# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def findLeaves(self, root: Optional[TreeNode]) -> List[List[int]]:
        res = {}
        def dfs(node):
            nonlocal res

            if not node:
                return 0

            leftHeight = dfs(node.left)
            rightHeight = dfs(node.right)

            height = max(leftHeight, rightHeight) + 1

            if height in res:
                res[height].append(node.val)
            else:
                res[height] = [node.val]

            return height
            
        dfs(root)
        return list(res.values())