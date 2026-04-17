// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return null;
        let map = new Map();
        let head2 = head;
        while(head2 !== null){
            map.set(head2, new Node(head2.val, null, null));
            head2 = head2.next;
        }

        let og = map.get(head);
        let clone = null;

        while(head !== null){
            clone = map.get(head);
            clone.next = map.get(head.next) || null;
            clone.random = map.get(head.random) || null;
            head = head.next;
        }
        return og;
    }
}
