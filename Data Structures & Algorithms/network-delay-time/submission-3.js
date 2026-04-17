class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        //REDO PROBLEM TOMORROW MORNING
        
        let seen = new Set(), map = new Map();

        for(let i = 1; i <= n; i++){
            map.set(i, []);
        }

        for(const [u, v, t] of times){
            map.get(u).push([t, v]); //time (weight), trgt
        }

        let q = new MinPriorityQueue((x) => x[0]);
        q.enqueue([0, k]);
        let t = 0;

        while(!q.isEmpty()){
            const [w1, src] = q.dequeue();
            if(seen.has(src)) continue;
            t = w1;
            seen.add(src);

            for(const [w2, trgt] of map.get(src)){
                if(!seen.has(trgt)) q.enqueue([w2 + w1, trgt]);
            }
        }

        return seen.size === n ? t : -1;


    }
}
