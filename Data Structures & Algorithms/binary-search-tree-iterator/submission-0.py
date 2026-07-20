# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class BSTIterator:

    def __init__(self, root: Optional[TreeNode]):
        arr = []

        def dfs(root):
            if not root:
                return 
            
            dfs(root.left)
            arr.append(root.val)
            dfs(root.right)
            return
        
        dfs(root)
        self.arr = arr
        self.i = 0

    def next(self) -> int:
        ret = self.arr[self.i] if self.i < len(self.arr) else -1
        self.i += 1
        return ret

    def hasNext(self) -> bool:
        return self.i < len(self.arr)
        


# Your BSTIterator object will be instantiated and called as such:
# obj = BSTIterator(root)
# param_1 = obj.next()
# param_2 = obj.hasNext()