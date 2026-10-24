# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:    
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        minHeap = []
        x = ListNode(0, None)

        for i in range(len(lists)):
            if lists[i]:
                heapq.heappush(minHeap, (lists[i].val, i, lists[i]))
                lists[i] = lists[i].next
        
        head = x
        while minHeap:
            (val, i, node) = heapq.heappop(minHeap)
            x.next = ListNode(val, None)
            node = node.next
            if node:
                heapq.heappush(minHeap, (node.val, i, node))
            x = x.next
        
        return head.next



       