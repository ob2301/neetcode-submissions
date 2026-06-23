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
        if(!head) return null;
        if(!head.next) return null;
        let res = new ListNode(0, head);
        let cur = head, prev = res;

        while(n > 0 && cur !== null){
            cur = cur.next;
            n--;
        }

        while(cur !== null && prev !== null){
            cur = cur.next;
            prev = prev.next;
        }
        //prev is now pointing to 3
        prev.next = prev.next.next;
        return res.next;
    }
}
