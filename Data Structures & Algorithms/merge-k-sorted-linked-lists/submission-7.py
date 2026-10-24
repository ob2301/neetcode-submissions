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
            while lists[i]:
                heapq.heappush(minHeap, (lists[i].val))
                lists[i] = lists[i].next
        
        head = x
        while minHeap:
            x.next = ListNode(heapq.heappop(minHeap), None)
            x = x.next
        
        return head.next



       