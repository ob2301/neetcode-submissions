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
        copies = {}
        dummy = Node(0, head)

        def dfs(node):
            if node in copies:
                return copies[node]
            if not node:
                return
            
            copies[node] = Node(node.val)
            copies[node].next = dfs(node.next)
            copies[node].random = dfs(node.random)

            return copies[node]
        return dfs(head)

