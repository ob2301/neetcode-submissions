class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        let adj = {};

        for(let i = 1; i <= n; i++){
            adj[i] = [];
        }
        let q = new MinPriorityQueue(x => x[1]);

        for(const [u, v, t] of times){
            adj[u].push([v, t]);
        }

        let seen = new Set();

        q.enqueue([k, 0]);
        //seen.add(k);

        while(!q.isEmpty()){
            const [from, time] = q.dequeue();

            if(seen.size === n) return time;
            if(seen.has(from)) continue;
            seen.add(from);

            for(const [v, t] of adj[from]){
                if(v === from) continue;
                q.enqueue([v, t + time]);
            }
            if(seen.size === n) return time;
        }

        return -1;
    }
}
