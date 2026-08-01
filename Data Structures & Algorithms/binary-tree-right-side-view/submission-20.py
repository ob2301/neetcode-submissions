# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        q = deque()

        q.append(root)
        res = []
        if not root:
            return []

        while q:
            l = len(q)
            isFirst = True
            for _ in range(l):

                node = q.popleft()
                if node and isFirst:
                    isFirst = False
                    res.append(node.val)

                if node.right:
                    q.append(node.right)
                if node.left:
                    q.append(node.left)
        return res