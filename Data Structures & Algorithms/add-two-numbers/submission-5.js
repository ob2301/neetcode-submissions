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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let head = new ListNode();
        let res = head;
        let carry = 0;

        while(l1 !== null || l2 !== null){
            let l1val = 0, l2val = 0;
            if(l1){
                l1val = l1.val;
            }
            if(l2){
                l2val = l2.val;
            }
            let sum = l1val + l2val + carry;
            carry = Math.floor((sum) / 10);
            head.next = new ListNode(sum % 10);

            if(l1) l1 = l1.next;
            if(l2) l2 = l2.next;
            head = head.next;
        }

        if(carry > 0) head.next = new ListNode(carry);

        return res.next;
    }
}
