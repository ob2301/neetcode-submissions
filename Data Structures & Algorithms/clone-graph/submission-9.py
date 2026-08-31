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

        def dfs(cur):
            if not cur:
                return

            if cur in adj:
                return adj[cur]

            if not cur in adj:
                adj[cur] = Node(cur.val)

            for neighbor in cur.neighbors:
                adj[cur].neighbors.append(dfs(neighbor))

            return adj[cur]
        
        return dfs(node)