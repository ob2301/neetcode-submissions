class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        //REDO PROBLEM TOMORROW MORNING
        let map = new Map(), smap = new Map();

        for(let i = 1; i <= n; i++){
            map.set(i, []);
        }

        for(const [u, v, t] of times){
            map.get(u).push([t, v]);
        }

        let min = 0;

        let q = new MinPriorityQueue(x => x[0]);

        q.enqueue([0, k]);
        let seen = new Set();

        while(!q.isEmpty()){
            const [time, node] = q.dequeue();

            if(seen.has(node)) continue;

            smap.set(node, time);
            seen.add(node);

            for(const [t, v] of map.get(node)){
                q.enqueue([t + time, v]);
            }
        }

        for(const [node, time] of smap){
            min = Math.max(min, time);
        }

        if(smap.size !== n) return -1;

        return min;
    }
}
