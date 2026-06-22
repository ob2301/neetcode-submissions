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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0, head);

        if(!head || !head.next) return null;
        let left = dummy, right = head;

        while(n > 0){
            right = right.next;
            n--;
        }

        while(right !== null){
            right = right.next;
            left = left.next;
        }

        left.next = left.next.next;
        return dummy.next;
    }
}
