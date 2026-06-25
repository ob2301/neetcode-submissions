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
        let slow = head, fast = head;

        while(slow !== null && slow.next !== null && fast !== null && fast.next !== null && fast.next.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }

        let list2 = slow.next;
        slow.next = null;

        //reverse list2, fast is practically discarded

        let prev = null;

        while(list2 != null){
            let temp = list2.next;
            list2.next = prev;
            prev = list2;
            list2 = temp;
        }

        let res = head;

        //0 1 2 3
        //6 5 4
        while(prev || head){
            if(prev && head){
                let temp = head.next;
                let temp2 = prev.next;
                head.next = prev;
                prev.next = temp;

                prev = temp2;
                head = temp;
            }
            else if(head){
                head = head.next;
            }
            else{
                head.next = prev;
                prev = prev.next;
            }
        }

        return res;
    }
}
