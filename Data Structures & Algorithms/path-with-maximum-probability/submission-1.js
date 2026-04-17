class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number[]} succProb
     * @param {number} start_node
     * @param {number} end_node
     * @return {number}
     */
    maxProbability(n, edges, succProb, start_node, end_node) {
        
        let map = new Map();

        for(let i = 0; i < n; i++){
            map.set(i, []);
        }

        for(let i = 0; i < edges.length; i++){
            const [src, dest] = edges[i];
            map.get(src).push([dest, succProb[i]]);
            map.get(dest).push([src, succProb[i]]);
        }

        let q = new MaxPriorityQueue((x) => x[0]), seen = new Set();

        q.enqueue([1, start_node]);

        while(!q.isEmpty()){
            const [p, src] = q.dequeue();
            seen.add(src);

            if(src === end_node) return p;

            for(const [des, pp] of map.get(src)){
                if(!seen.has(des)){
                    q.enqueue([pp * p, des]);
                }
            }
        }

        return 0;
    }
}
