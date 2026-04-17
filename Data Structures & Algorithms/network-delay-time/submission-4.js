class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        //REDO PROBLEM TOMORROW MORNING
        
        let map = new Map(), t = 0;

        for(let i = 1; i <= n; i++){map.set(i, []);}

        for(const [source, target, time] of times){
            map.get(source).push([time, target]);
        }

        let q = new MinPriorityQueue(x => x[0]);
        let seen = new Set();

        q.enqueue([0, k]);

        while(!q.isEmpty()){
            const [pr, node] = q.dequeue();
            if(seen.has(node)) continue;
            seen.add(node);
            t = pr;

            for(const [time, target] of map.get(node)){
                q.enqueue([pr + time, target]);
            }
            //t = pr;
        }

        return seen.size === n ? t : -1;
    }
}
