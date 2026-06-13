class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        let total = 0;

         trips.sort((a, b) => a[1] - b[1]);

         let q = new MinPriorityQueue((a) => a[0]);

         for(let i = 0; i < trips.length; i++){
            const [num, from, to] = trips[i];

            while(!q.isEmpty() && (total > capacity || q.front()[0] <= from)){
                if(q.front()[0] <= from){
                    total -= q.dequeue()[1];
                }
            }

            total += num;
            q.enqueue([to, num]);

            if(total > capacity) return false;
         }

         return true;
    }
}
