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
        let slow = head, fast = head;
        if(slow === null) return false;
        while(fast.next !== null && fast.next.next !== null){
            fast = fast.next.next;
            slow = slow.next;
            if(fast === slow){
                return true;
            }
        }
        return false;
    }
}
