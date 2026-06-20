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
        let carry = 0;
        let res = new ListNode(0, null);
        let r = res;

        while(l1 || l2 || carry){
            if(l1 && l2){
                const sum = (carry + l1.val + l2.val);

                if(sum >= 10){
                    carry = 1;
                    res.val = sum % 10;
                }
                else{
                    res.val = sum;
                    carry = 0;
                }
                l1 = l1.next;
                l2 = l2.next;
            }
            else if(l1){
                const sum = carry + l1.val;

                if(sum >= 10){
                    carry = 1;
                    res.val = sum % 10;
                }
                else{
                    res.val = sum;
                    carry = 0;
                }
                l1 = l1.next;
            }
            else if(l2){
                const sum = carry + l2.val;

                if(sum >= 10){
                    carry = 1;
                    res.val = sum % 10;
                }
                else{
                    res.val = sum;
                    carry = 0;
                }
                l2 = l2.next;
            }
            if(l1 || l2){
                res.next = new ListNode();
                res = res.next;
            }
            else if(carry){
                res.next = new ListNode(carry);
                res = res.next;
                carry = 0;
            }
        }
        return r;
    }
}
