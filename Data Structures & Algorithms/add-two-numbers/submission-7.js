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
        

        let res = new ListNode();
        const head = res;

        while(l1 || l2){
            if(l1 && l2){
                const sum = l1.val + l2.val;
                if(sum + res.val >= 10){
                    res.val = ((sum + res.val) % 10);
                    carry = 1;
                }
                else{
                    res.val += sum;
                    carry = 0;
                }
                l1 = l1.next;
                l2 = l2.next;
            }
            else if(l1){
                if(res.val + l1.val >= 10){
                    res.val = ((l1.val + res.val)%10);
                    carry = 1;
                }
                else{
                    res.val += l1.val;
                    carry = 0;
                }
                l1 = l1.next;
            }
            else{
                if(res.val + l2.val >= 10){
                    res.val = ((l2.val + res.val) %10);
                    carry = 1;
                }
                else{
                    res.val += l2.val;
                    carry = 0;
                }
                l2 = l2.next;
            }
            if(carry !== 0 || l1 || l2){
                res.next = new ListNode(carry);
            res = res.next;
            }
            
        }

        return head;
    }
}
