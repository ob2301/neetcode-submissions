# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        #dfs and add to a list

        maxHeap = []

        def dfs(node):
            if not node:
                return
            
            heapq.heappush(maxHeap, -node.val)
            if len(maxHeap) > k:
                heapq.heappop(maxHeap)

            if node.left:
                dfs(node.left)
            if node.right:
                dfs(node.right)
        
        dfs(root)

        while len(maxHeap) > k:
            heapq.heappop(maxHeap)
        
        return -maxHeap[0]


        