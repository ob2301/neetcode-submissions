"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        cache = {}
        #og_node -> copy
        dummy = Node(0, head)
        cur = head

        def dfs(node):
            if not node:
                return

            if node in cache:
                return cache[node]

            cache[node] = Node(node.val)
            
            cache[node].next = dfs(node.next)
            cache[node].random = dfs(node.random)

            return cache[node]
        
        return dfs(head)
            
        