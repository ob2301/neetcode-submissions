# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:    
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        minHeap = []
        count = 0

        for node in lists:
            if node:
                heapq.heappush(minHeap, (node.val, count, node))
                count += 1
        
        res = ListNode(0)
        r = res

        while minHeap:
            val, count, node = heapq.heappop(minHeap)

            res.next = node

            if node and node.next:
                heapq.heappush(minHeap, (node.next.val, count, node.next))
            count += 1
            res = res.next

        return r.next
       