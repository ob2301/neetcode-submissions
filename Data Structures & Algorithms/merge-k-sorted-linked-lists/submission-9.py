# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:    
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        #minheap, throw top pointer of each list into it then loop and create

        minHeap = []
        i = 0

        for topPointer in lists:
            i += 1
            if topPointer:
                heapq.heappush(minHeap, (topPointer.val, i, topPointer))
        
        head = ListNode(0, None)
        dummy = head

        while minHeap:
            value, dummyCounter, node = heapq.heappop(minHeap)

            head.next = node
            head = head.next

            if node.next:
                node = node.next
                heapq.heappush(minHeap, (node.val, dummyCounter, node))
        
        return dummy.next
        