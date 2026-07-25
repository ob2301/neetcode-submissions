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

        def dfs(cur):
            if cur in adj:
                return adj[cur]

            adj[cur] = Node(cur.val, [])
            
            for nei in cur.neighbors:
                adj[cur].neighbors.append(dfs(nei))

            return adj[cur]

        dfs(node)

        return adj[node]