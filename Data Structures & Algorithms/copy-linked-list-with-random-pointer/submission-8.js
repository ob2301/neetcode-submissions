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
        let cur = head;
        let res = head;

        while(cur !== null){
            map.set(cur, new Node(cur.val, null, null));
            cur = cur.next;
        }

        while(head !== null){
            map.get(head).next = (map.get(head.next) || null);
            map.get(head).random = (map.get(head.random) || null);

            head = head.next;
        }

        return map.get(res);
    }
}
