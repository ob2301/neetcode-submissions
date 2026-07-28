# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        
        cur = head
        count = 0

        while count < k and cur:
            cur = cur.next
            count += 1

            if count == k:
                cur = self.reverseKGroup(cur, k)

                prev = cur
                for _ in range(k):
                    tmp = head.next
                    head.next = prev
                    prev = head
                    head = tmp
                return prev
            
        return head