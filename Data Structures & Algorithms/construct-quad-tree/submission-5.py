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
        def dfs(n, r, c):
            #same val check, if n is 1 we are on 1 block
            if n == 1:
                return Node(grid[r][c], True)
            
            n = n // 2
            #n is the region size
            topLeft = dfs(n, r, c)
            topRight = dfs(n, r, n + c)
            bottomLeft = dfs(n, r + n, c)
            bottomRight = dfs(n, r + n, c + n)

            if topLeft.val == topRight.val == bottomLeft.val == bottomRight.val and topLeft.isLeaf and topRight.isLeaf and bottomRight.isLeaf and bottomLeft.isLeaf:
                    return Node(grid[r][c], True)
            else:
                return Node(False, False, topLeft, topRight, bottomLeft, bottomRight)
            
        return dfs(len(grid), 0, 0)





        