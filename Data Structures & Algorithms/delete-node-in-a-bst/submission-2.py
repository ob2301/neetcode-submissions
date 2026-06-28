# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def deleteNode(self, root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
     
        if not root:
            return None
        elif key < root.val:
            root.left = self.deleteNode(root.left, key)
        elif key > root.val:
            root.right = self.deleteNode(root.right, key)
        else:

            if not root.left and not root.right:
                return None

            elif root.right and not root.left:
                root = root.right
            
            elif root.left and not root.right:
                root = root.left
            
            else:
                left = root.left

                root = root.right

                curr = root

                while curr.left:
                    curr = curr.left
                
                curr.left = left
            
        return root

                

                
