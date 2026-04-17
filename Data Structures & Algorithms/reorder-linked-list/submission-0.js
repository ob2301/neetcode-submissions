/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        //think reverse!
        if(!head) return;
        if(!head.next) return;

        //rev half the list then connect that way, every other
        let fast = head, slow = head;

        while(fast && fast.next){
            fast = fast.next.next;
            slow = slow.next;  
        }
        //slow is mid now
        let prev = null;
        let second = slow.next;
        slow.next = null;
        while(second !== null){
            let temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }
        //merging
        slow = prev;
        //slow is null, but prev is last node after reversing
        while(head !== null && slow !== null){
            let temp = head.next, next_slow = slow.next;
            head.next = slow;
            slow.next = temp;
            //shift pointers
            head = temp;
            slow = next_slow;
        }
        //head.next = null;

    }
}
