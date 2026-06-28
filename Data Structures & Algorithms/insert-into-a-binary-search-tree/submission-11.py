# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def insertIntoBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        
        if not root:
            return TreeNode(val)

        point = root

        while point:
            
            if val > point.val:
                if not point.right:
                    break
                point = point.right
            else:
                if not point.left:
                    break
                point = point.left

        if val > point.val:
                point.right = TreeNode(val)
        else:
                point.left = TreeNode(val)


        return root