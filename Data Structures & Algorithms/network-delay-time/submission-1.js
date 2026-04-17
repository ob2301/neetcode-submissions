class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        //dikstras, min heap (priorityqueue)

        let t = new Map();

        for(let i = 1; i <= n; i++){
            t.set(i, []);
        }

        for(const [s, d, w] of times){
            t.get(s).push([d, w]); //push dest & weight for each start
        }

        //add all to it

        let minheap = new PriorityQueue((a,b) => a[0] - b[0]);
        let shortest = new Map();
        minheap.enqueue([0, k]);//add the weight of the start (0 obviously)

        while(!minheap.isEmpty()){
            const [weight, cur] = minheap.dequeue();

            if(shortest.has(cur)) continue;//skip if we alr have

            shortest.set(cur, weight);

            for(const [dest, w2] of t.get(cur)){
                minheap.enqueue([weight + w2, dest]);
            }
        }

        let count = 0;

        for(const [key, value] of shortest){
            count = Math.max(count, value);
        }

        for(let i = 1; i < n + 1; i++){
            if(!shortest.has(i)) return -1;
        }
        return count;
    }
}
