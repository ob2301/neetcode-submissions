class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        //REDO PROBLEM TOMORROW MORNING
        
        let adj = {};

        for(let i = 1; i <= n; i++){
            adj[i] = [];
        }

        for(let i = 0; i < times.length; i++){
            adj[times[i][0]].push([times[i][1], times[i][2]]);
            //[target node, time to get their]
        }

        let queue = new MinPriorityQueue( x => x[1]);
        queue.enqueue([k, 0]);
        //node we are at + time accumilated

        let seen = new Set();

        while(!queue.isEmpty() && seen.size !== n){
            const [node, time] = queue.dequeue();

            if(seen.has(node)) continue;
            seen.add(node);

            if(seen.size === n) return time;

            for(const [target, t] of adj[node]){
                queue.enqueue([target, t + time]);
            }
        }

        return -1;
    }
}
