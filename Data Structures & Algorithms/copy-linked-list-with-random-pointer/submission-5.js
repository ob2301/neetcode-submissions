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
        let copy = new Map();
        let res = head;
        let c = head;

        while(c !== null){
            copy.set(c, new Node(c.val, null, null));
            c = c.next;
        }

        while(head !== null){
            copy.get(head).next = (copy.get(head.next) || null);
            copy.get(head).random = (copy.get(head.random) || null);

            head = head.next;
        }

        return copy.get(res);
    }
}
