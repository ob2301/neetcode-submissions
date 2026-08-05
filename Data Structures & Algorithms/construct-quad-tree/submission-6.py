"""
# Definition for a QuadTree node.
class Node:
    def __init__(self, val, isLeaf, topLeft, topRight, bottomLeft, bottomRight):
        self.val = val
        self.isLeaf = isLeaf
        self.topLeft = topLeft
        self.topRight = topRight
        self.bottomLeft = bottomLeft
        self.bottomRight = bottomRight
"""

class Solution:
    def construct(self, grid: List[List[int]]) -> 'Node':
        #if all 1s or all 0s set isLeaf to True and val to val
        def dfs(n, r, c):
            if n == 1:
                return Node(grid[r][c], True)
            n = n // 2

            topLeft = dfs(n, r, c)
            topRight = dfs(n, r, c + n)
            bottomLeft = dfs(n, r + n, c)
            bottomRight = dfs(n, r + n, c + n)

            if topLeft.val == topRight.val == bottomLeft.val == bottomRight.val and topLeft.isLeaf and topRight.isLeaf and bottomLeft.isLeaf and bottomRight.isLeaf:
                return Node(topLeft.val, True)
            else:
                return Node(topLeft.val, False, topLeft, topRight, bottomLeft, bottomRight)
        
        return dfs(len(grid), 0, 0)

            







        