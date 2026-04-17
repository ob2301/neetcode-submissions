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
        if(head === null || head.next === null) return false;
        let slow = head, fast = head.next;

        while(fast.next !== null && fast.next.next !== null){
            if(slow === fast) return true;
            slow = slow.next;
            fast = fast.next.next;
        }

        return false;
    }
}
