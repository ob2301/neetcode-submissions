# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        
        res = []
        queue = deque()
        queue.append(root)
        while queue:
            first = True
            length = len(queue)

            while length:
                root = queue.popleft()
                if root:
                    if first:
                        first = False
                        res.append(root.val)

                    if root.right:
                        queue.append(root.right)
                    if root.left:
                        queue.append(root.left)
                length -= 1
        return res

