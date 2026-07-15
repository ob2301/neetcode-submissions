# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from collections import deque

class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        ret = [] 
        if not root:
            return ret

        q = deque()
        q.append(root)

        level = 0
        while q:
            size = len(q)
            ret.append([0] * size)
            for i in range(len(q)):
                node = q.popleft()

                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)

                if level % 2 == 0:
                    ret[level][i] = node.val
                else:
                    ret[level][size - i - 1] = node.val

            level += 1

        return ret
                





