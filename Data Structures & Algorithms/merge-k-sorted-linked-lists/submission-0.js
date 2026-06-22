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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let minHeap = new MinPriorityQueue(x => x.val);

        for(const list of lists){
            if(list != null) minHeap.enqueue(list);
        }

        let res = new ListNode(0, null);
        let cur = res;

        while(!minHeap.isEmpty()){
            let node = minHeap.dequeue();

            cur.next = node;
            cur = cur.next;

            node = node.next;
            if(node != null){
                minHeap.enqueue(node);
            }
        }

        return res.next;
    }
}
