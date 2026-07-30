# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        prev = dummy
        i = 1

        while i < left:
            prev = prev.next
            i += 1

        sublistHead = prev.next
        sublistTail = prev.next

        while i < right and sublistTail:
            sublistTail = sublistTail.next
            i += 1
        
        oldPrev = prev
        prev = sublistTail.next
        stop = sublistTail.next

        while sublistHead != stop:
            temp = sublistHead.next
            sublistHead.next = prev
            prev = sublistHead
            sublistHead = temp
        oldPrev.next = sublistTail
        
        return dummy.next

        


        
