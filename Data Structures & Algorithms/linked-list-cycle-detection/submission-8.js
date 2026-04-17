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
     * @return {boolean}
     */
    hasCycle(head) {
        if(!head || !head.next) return false;
        
        let slow = head, fast = head.next;

        while(fast.next !== null && fast.next.next !== null && slow !== fast){
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow === fast;
    }
}
