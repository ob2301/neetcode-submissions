# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        minHeap = []

        def dfs(node):
            if not node:
                return
            
            heapq.heappush(minHeap, node.val)

            if node.left:
                dfs(node.left)
            if node.right:
                dfs(node.right)
            
            return
        
        dfs(root)

        while k > 1 and minHeap:
            heapq.heappop(minHeap)
            k -= 1
        
        return minHeap[0]