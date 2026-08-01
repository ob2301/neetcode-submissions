"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        adj = {}

        if not node:
            return None

        def dfs(root):
            if not root:
                return
            
            if root in adj:
                return adj[root]

            adj[root] = Node(root.val)

            for nei in root.neighbors:
                adj[root].neighbors.append(dfs(nei))
            
            return adj[root]

        return dfs(node)
        #return adj[node]