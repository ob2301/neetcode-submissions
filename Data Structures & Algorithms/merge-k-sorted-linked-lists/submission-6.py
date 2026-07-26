# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:    
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        minHeap = []
        i = 0

        for node in lists:
            heapq.heappush(minHeap, (node.val, i, node))
            i += 1

        cur = ListNode(0, None)
        res = cur

        while minHeap:
            _, i, node = heapq.heappop(minHeap)

            if node:
                cur.next = node
            if node and node.next:
                heapq.heappush(minHeap, (node.next.val, i, node.next))

            cur = cur.next


        return res.next
       