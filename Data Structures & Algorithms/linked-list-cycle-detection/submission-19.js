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

        if(!head) return false;

        while(slow.next && fast.next && fast.next.next){
            slow = slow.next;
            fast = fast.next.next;

            if(slow === fast) return true;
        }

        return false;
    }
}
